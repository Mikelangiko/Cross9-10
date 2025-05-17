import { Component, OnInit } from '@angular/core';
import { FoodReadService } from '../services/prods/food_serv_fire';
import { CartService } from '../services/CartService/cart.service';
import { NgFor, NgIf } from '@angular/common';
import { CaloriesPipe } from '../pipe/custompipe/calore.pipe';
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
  IonModal,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonList,
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
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonList,
    IonLabel,
    NgFor,
    NgIf,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    CaloriesPipe,
  ],
})
export class HomePage implements OnInit {
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  editFormId: string = '';
  showDeleteForm: boolean = false;
  deleteFormId: string = '';
  selectedValue: string = '';
  mealSets: {
    id: string;
    name: string;
    products: IProduct[];
    totalPrice: number;
    totalCalories: string;
  }[] = [];
  isModalOpen: boolean = false;
  selectedSet: {
    id: string;
    name: string;
    products: IProduct[];
    totalPrice: number;
    totalCalories: string;
  } | null = null;

  constructor(
    public foodReadService: FoodReadService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.foodReadService.load();
    this.updateMealSets();
  }

  handleChange(event: CustomEvent) {
    this.selectedValue = event.detail.value;
  }

  addFormShow() {
    this.showAddForm = true;
  }

  addProduct(product: IProduct) {
    this.foodReadService.addProduct(product);
    this.showAddForm = false;
    this.updateMealSets();
  }

  editFormShow(id: string) {
    this.editFormId = id;
    this.showEditForm = true;
  }

  editProduct(product: IProduct) {
    this.foodReadService.editProduct(product);
    this.showEditForm = false;
    this.updateMealSets();
  }

  deleteFormShow(id: string) {
    this.deleteFormId = id;
    this.showDeleteForm = true;
  }

  deleteProduct(id: string) {
    this.foodReadService.deleteProduct(id);
    this.showDeleteForm = false;
    this.updateMealSets();
  }

  cancelDelete() {
    this.showDeleteForm = false;
  }

  updateMealSets() {
    this.mealSets = this.cartService.createSets(this.foodReadService.products);
  }

  addToCart(
    item:
      | IProduct
      | {
          id: string;
          name: string;
          products: IProduct[];
          totalPrice: number;
          totalCalories: string;
        }
  ) {
    this.cartService.addToCart(item);
    if ('products' in item) {
      this.selectedSet = item;
      this.isModalOpen = true;
    }
  }

  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    if (!isOpen) {
      this.selectedSet = null;
    }
  }
}
