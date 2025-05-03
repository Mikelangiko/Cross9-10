import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonButton,
  IonItem,
  IonTitle,
  IonInput,
  IonLabel,
  IonContent,
  IonRadioGroup,
  IonRadio,
} from '@ionic/angular/standalone';
import { ProductType, productType } from './../../classes/class/ProductName';
import { ConfigService } from 'src/app/services/clasif/typefood.service';
import { FoodReadService } from 'src/app/services/productread/food_serv.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common'; // 👈 це вже є, переконайся

@Component({
  selector: 'app-lab8',
  templateUrl: './lab8.page.html',
  styleUrls: ['./lab8.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonRadioGroup,
    IonRadio,
  ],
})
export class Lab8Page implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  type: ProductType = productType[0];
  count = 0;

  constructor(
    public foodService: FoodReadService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.foodService.load();
    const typeSub = this.configService.type$.subscribe((type) => {
      this.type = type;
    });
    this.subscriptions.push(typeSub);

    setTimeout(() => {
      console.log(
        'SearchProducts after load:',
        this.foodService.searchProducts
      );
    }, 2000);
  }

  nextType(): void {
    if (this.count < productType.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.configService.setType(productType[this.count]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
