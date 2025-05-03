import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../classes/interface/IProduct';
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
  ],
})
export class DeleteProductComponent {
  @Input() product!: IProduct;
  @Output() productDeleted = new EventEmitter<number>();
  @Output() cancel = new EventEmitter<void>();

  confirmDelete() {
    this.productDeleted.emit(this.product.getID());
  }

  cancelDelete() {
    this.cancel.emit();
  }
}
