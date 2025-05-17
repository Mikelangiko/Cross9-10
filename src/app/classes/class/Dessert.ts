import { Product } from './Product';
export class Dessert extends Product {
  private sugarGrams: number;
  private calories: number = 0;
  constructor(
    id: string,
    name: string,
    price: number,
    sugarGrams: number,
    calories: number
  ) {
    super(id, name, price);
    this.sugarGrams = sugarGrams;
    this.calories = calories;
  }
  getSugarGrams(): number {
    return this.sugarGrams;
  }

  override getType(): string {
    return 'Dessert';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Цукор: ' + this.sugarGrams + ' г');
    details.push('Калорійність: ' + this.calories);
    return details;
  }
}
