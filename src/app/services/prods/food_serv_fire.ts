import { Injectable, inject, OnDestroy } from '@angular/core';
import {
  Database,
  ref,
  onValue,
  push,
  update,
  remove,
  set,
} from '@angular/fire/database';
import { IProduct } from 'src/app/classes/interface/IProduct';
import { ProductFactory } from 'src/app/classes/class/ProductFactory';

@Injectable({
  providedIn: 'root',
})
export class FoodReadService implements OnDestroy {
  public products: IProduct[] = [];

  private db: Database = inject(Database);

  constructor() {
    this.load();
  }

  public load(): void {
    const productsRef = ref(this.db, 'food');
    onValue(
      productsRef,
      (snapshot) => {
        const data = snapshot.val();
        const loadedProducts: IProduct[] = [];

        if (data) {
          snapshot.forEach((childSnapshot) => {
            const value = childSnapshot.val();
            const id = childSnapshot.key!;

            const product = ProductFactory.createProduct(value);
            product.setID(id);
            loadedProducts.push(product);
          });

          this.products = loadedProducts;

          console.log('🔄 Завантажені всі продукти:');
          this.products.forEach((p) => {
            console.log(
              `✅ ${p.getID()} | ${p.getName()} | ${p.getType()} | ${p.getPrice()} грн`
            );
          });
        } else {
          this.products = [];
        }
      },
      (error) => {
        console.error('❌ Помилка завантаження даних:', error);
      }
    );
  }

  public addProduct(product: IProduct): void {
    const productData = this.getProductData(product);
    const productRef = push(ref(this.db, 'food'));

    const newId = productRef.key!;
    product.setID(newId);

    set(productRef, { ...productData, id: newId })
      .then(() => {
        this.products.push(product);
        console.log(`🆕 Додано продукт: ${product.getName()} (${newId})`);
      })
      .catch((error) => {
        console.error('❌ Помилка додавання продукту:', error);
      });
  }

  public editProduct(product: IProduct): void {
    const productData = this.getProductData(product);
    const productRef = ref(this.db, `food/${product.getID()}`);

    update(productRef, productData)
      .then(() => {
        const index = this.products.findIndex(
          (p) => p.getID() === product.getID()
        );
        if (index !== -1) {
          this.products[index] = product;
        }
        console.log(
          `✏️ Оновлено продукт: ${product.getName()} (${product.getID()})`
        );
      })
      .catch((error) => {
        console.error('❌ Помилка оновлення продукту:', error);
      });
  }

  public deleteProduct(id: string): void {
    const productRef = ref(this.db, `food/${id}`);
    remove(productRef)
      .then(() => {
        this.products = this.products.filter(
          (product) => product.getID() !== id
        );
        console.log(`🗑️ Видалено продукт ID: ${id}`);
      })
      .catch((error) => {
        console.error('❌ Помилка видалення продукту:', error);
      });
  }

  private getProductData(product: IProduct): any {
    return {
      name: product.getName(),
      price: product.getPrice(),
      type: product.getType(),
      ...(product.getType() === 'ReadyMeal' && {
        calories: (product as any).getcalories(),
        weight: (product as any).getWeight(),
      }),
      ...(product.getType() === 'Drink' && {
        volume: (product as any).getVolume(),
      }),
      ...(product.getType() === 'Dessert' && {
        sugarGrams: (product as any).getSugarGrams(),
      }),
      ...(product.getType() === 'Sauce' && {
        volume: (product as any).getVolume(),
      }),
    };
  }

  ngOnDestroy(): void {
    // Немає підписок, які потрібно відписати
  }
}
