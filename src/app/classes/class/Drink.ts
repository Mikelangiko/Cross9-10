import { Product } from './Product';

export class Drink extends Product {
  private volume: number;

  constructor(id: number, name: string, price: number, volume: number) {
    super(id, name, price);
    this.volume = volume;
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

    return details;
  }
}
