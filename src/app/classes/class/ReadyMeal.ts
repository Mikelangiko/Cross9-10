import { Product } from './Product';

export class ReadyMeal extends Product {
  private calories: number;
  private weight: number;
  constructor(
    id: string,
    name: string,
    price: number,
    calories: number,
    weight: number
  ) {
    super(id, name, price);
    this.calories = calories;
    this.weight = weight;
  }
  getcalories(): number {
    return this.calories;
  }

  getWeight(): number {
    return this.weight;
  }

  override getType(): string {
    return 'ReadyMeal';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Калорійність: ' + this.calories);
    details.push('Вага: ' + this.weight + ' мг');
    return details;
  }
}
