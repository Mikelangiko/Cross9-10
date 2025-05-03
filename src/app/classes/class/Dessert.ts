import { Product } from './Product';
export class Dessert extends Product {
  private sugarGrams: number;
  constructor(id: number, name: string, price: number, sugarGrams: number) {
    super(id, name, price);
    this.sugarGrams = sugarGrams;
  }
  getsugarGrams(): number {
    return this.sugarGrams;
  }

  override getType(): string {
    return 'Dessert';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Цукор: ' + this.sugarGrams + ' г');

    return details;
  }
}
