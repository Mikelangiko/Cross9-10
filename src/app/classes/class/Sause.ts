import { Product } from './Product';

export class Sauce extends Product {
  private calories: number = 0;
  private volume: number; // в мілілітрах

  constructor(
    id: string,
    name: string,
    price: number,
    volume: number,
    calories: number
  ) {
    super(id, name, price);
    if (volume <= 0) throw new Error('volume <= 0');
    this.calories = calories;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Обʼєм: ' + this.volume + ' мл');
    details.push('Калорійність: ' + this.calories);
    return details;
  }

  override getType(): string {
    return 'Sauce';
  }
}
