import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  IonInput,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonItem,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { ProductFactory } from '../classes/class/ProductFactory';
import { IProduct } from '../classes/interface/IProduct';
import { formConstructor } from '../forms/formconstructor';
import { productType, ProductType } from '../classes/class/ProductName';
import { nameValidator } from '../validators/name.validator';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    CommonModule,
    IonInput,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonItem,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonButton,
    ReactiveFormsModule,
  ],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  currentType: ProductType = 'ReadyMeal';
  types = productType;

  @Output() productAdd: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onTypeChange(type: any): void {
    this.currentType = type as ProductType;
    formConstructor(type, this.productForm, this.fb);
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.type = this.currentType;
      const product = ProductFactory.createProduct(formData);
      this.productAdd.emit(product);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {
    this.onTypeChange(this.currentType);
  }
}
