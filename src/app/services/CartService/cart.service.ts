import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/classes/interface/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: {
    item: IProduct | { id: string; name: string; products: IProduct[] };
    count: number;
  }[] = [];

  constructor() {}

  createSets(
    products: IProduct[]
  ): {
    id: string;
    name: string;
    products: IProduct[];
    totalPrice: number;
    totalCalories: string;
  }[] {
    const sets: {
      id: string;
      name: string;
      products: IProduct[];
      totalPrice: number;
      totalCalories: string;
    }[] = [];
    for (let i = 0; i < products.length; i += 3) {
      const setProducts = products.slice(i, i + 3);
      if (setProducts.length > 0) {
        const set = {
          id: `set-${i / 3 + 1}`,
          name: `Набір ${i / 3 + 1}`,
          products: setProducts,
          totalPrice: 0, // Не обчислюємо ціну
          totalCalories: '', // Не обчислюємо калорійність
        };
        sets.push(set);
      }
    }
    return sets;
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
    const existingItem = this.cartItems.find((cartItem) => {
      if ('id' in item && 'id' in cartItem.item) {
        return cartItem.item.id === item.id;
      }
      if ('getID' in item && 'getID' in cartItem.item) {
        return cartItem.item.getID() === item.getID();
      }
      return false;
    });

    if (existingItem) {
      existingItem.count++;
    } else {
      this.cartItems.push({ item, count: 1 });
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  getCart() {
    return this.cartItems;
  }
}
