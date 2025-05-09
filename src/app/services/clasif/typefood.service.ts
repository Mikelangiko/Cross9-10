import { ProductType, productType } from './../../classes/class/ProductName';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

const DEFAULT_TYPE: ProductType = productType[0];

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private currentType: ProductType = DEFAULT_TYPE;

  private typeSubject = new BehaviorSubject<ProductType>(this.currentType);
  type$ = this.typeSubject.asObservable();

  constructor() {}

  setType(type: ProductType) {
    console.log('Є зміни!!!');
    console.log('Нова категорія типу:', type);
    this.currentType = type;
    this.typeSubject.next(type);
  }

  getCurrentType(): ProductType {
    return this.currentType;
  }
}
