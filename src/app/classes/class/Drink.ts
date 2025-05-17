import { Product } from './Product';

export class Drink extends Product {
  private volume: number;
  private calories: number = 0;

  constructor(
    id: string,
    name: string,
    price: number,
    volume: number,
    calories: number
  ) {
    super(id, name, price);
    this.volume = volume;
    this.calories = calories;
  }

  getVolume(): number {
    return this.volume;
  }

  override getType(): string {
    return 'Drink';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Обʼєм: ' + this.volume + ' мл');
    details.push('Калорійність: ' + this.calories);
    return details;
  }
}
