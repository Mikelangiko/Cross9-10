import { ReadyMeal } from './ReadyMeal';
import { Drink } from './Drink';
import { Dessert } from './Dessert';
import { IProduct } from '../interface/IProduct';
import { Sauce } from './Sause';
export class ProductFactory {
  static createProduct(data: any): IProduct {
    switch (data.type) {
      case 'ReadyMeal':
        return new ReadyMeal(
          data.id,
          data.name,
          data.price,
          data.calories,
          data.weight
        );
      case 'Drink':
        return new Drink(
          data.id,
          data.name,
          data.price,
          data.volume,
          data.mainIngredient
        );
      case 'Dessert':
        return new Dessert(data.id, data.name, data.price, data.sugarGrams);
      case 'Sauce':
        return new Sauce(data.id, data.name, data.price, data.volume);

      default:
        throw new Error('Unknown product type');
    }
  }
}
