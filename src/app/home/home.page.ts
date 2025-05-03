import { Component, OnInit } from '@angular/core';
import { FoodReadService } from '../services/productread/food_serv.service';
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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
export class HomePage {
  showAddForm: boolean = false;

  showEditForm: boolean = false;
  editFormNumber: number = 0;

  showDeleteForm: boolean = false;
  deleteFormNumber: number = 0;

  selectedValue: string = '';

  constructor(public foodReadService: FoodReadService) {}

  handleChange(event: CustomEvent) {
    this.selectedValue = event.detail.value;
  }

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct($event: any) {
    this.foodReadService.addProduct($event);
    this.showAddForm = false;
  }

  editFormShow(n: number) {
    this.editFormNumber = n;
    this.showEditForm = true;
  }
  editProduct($event: any) {
    this.foodReadService.editProduct($event);
    this.showEditForm = false;
  }

  deleteFormShow(n: number) {
    this.deleteFormNumber = n;
    this.showDeleteForm = true;
  }
  deleteProduct(n: number) {
    this.foodReadService.deleteProduct(n);
    this.showDeleteForm = false;
  }
  cancelDelete() {
    this.showDeleteForm = false;
  }

  ngOnInit() {
    this.foodReadService.load();
  }
}
