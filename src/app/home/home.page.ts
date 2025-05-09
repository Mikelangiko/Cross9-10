import { Component, OnInit } from '@angular/core';
import { FoodReadService } from '../services/prods/food_serv_fire';
import { NgFor, NgIf } from '@angular/common';
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
import { AddProductComponent } from '../add-product/add-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { IProduct } from '../classes/interface/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
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
    NgFor,
    NgIf,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
})
export class HomePage implements OnInit {
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  editFormId: string = '';
  showDeleteForm: boolean = false;
  deleteFormId: string = '';
  selectedValue: string = '';

  constructor(public foodReadService: FoodReadService) {}

  handleChange(event: CustomEvent) {
    this.selectedValue = event.detail.value;
  }

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct(product: IProduct) {
    this.foodReadService.addProduct(product);
    this.showAddForm = false;
  }

  editFormShow(id: string) {
    this.editFormId = id;
    this.showEditForm = true;
  }

  editProduct(product: IProduct) {
    this.foodReadService.editProduct(product);
    this.showEditForm = false;
  }

  deleteFormShow(id: string) {
    this.deleteFormId = id;
    this.showDeleteForm = true;
  }

  deleteProduct(id: string) {
    this.foodReadService.deleteProduct(id);
    this.showDeleteForm = false;
  }

  cancelDelete() {
    this.showDeleteForm = false;
  }

  ngOnInit() {
    this.foodReadService.load();
  }
}
