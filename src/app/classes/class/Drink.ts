import { Product } from './Product';

export class Drink extends Product {
  private volume: number;
  private mainIngredient: string;

  constructor(
    id: number,
    name: string,
    price: number,
    volume: number,
    mainIngredient: string
  ) {
    super(id, name, price);
    this.volume = volume;
    this.mainIngredient = mainIngredient;
  }

  getVolume(): number {
    return this.volume;
  }

  getmainIngredient(): string {
    return this.mainIngredient;
  }

  override getType(): string {
    return 'Drink';
  }

  override getDetails(): string[] {
    let details = [];
    details.push('Обʼєм: ' + this.volume + ' мл');
    details.push('Газований: ' + this.mainIngredient);
    return details;
  }
}
