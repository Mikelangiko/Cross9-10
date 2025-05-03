import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../classes/interface/IProduct';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from '../validators/name.validator';
import { formConstructor } from '../forms/formconstructor';
import { productType } from '../classes/class/ProductName';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonInput,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ProductFactory } from '../classes/class/ProductFactory';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonItem,
    IonInput,
  ],
})
export class EditProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() productUpdated = new EventEmitter<IProduct>();
  productForm!: FormGroup;
  types = productType;
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.type = this.product.getType();
      formData.id = this.product.getID();

      const product = ProductFactory.createProduct(formData);
      this.productUpdated.emit(product);
    } else {
      console.error;
    }
  }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: [this.product.getName(), [Validators.required, nameValidator()]],
      price: [
        this.product.getPrice(),
        [Validators.required, Validators.min(0)],
      ],
    });
    formConstructor(this.product.getType(), this.productForm, this.fb);
  }
}
