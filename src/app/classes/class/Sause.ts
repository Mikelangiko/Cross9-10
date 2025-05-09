import { Product } from './Product';

export class Sauce extends Product {
  private volume: number; // в мілілітрах

  constructor(
    id: string,
    name: string,
    price: number,

    volume: number
  ) {
    super(id, name, price);
    if (volume <= 0) throw new Error('volume <= 0');

    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }

  override getDetails(): string[] {
    return ['Обʼєм: ' + this.volume + ' мл'];
  }

  override getType(): string {
    return 'Sauce';
  }
}
