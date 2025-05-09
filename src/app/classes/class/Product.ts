import { IProduct } from '../interface/IProduct';

export abstract class Product implements IProduct {
  private id: string;
  private price: number;
  private name: string;

  constructor(id: string, name: string, price: number) {
    if (price < 0) throw new Error('Price < 0');
    this.id = id;
    this.price = price;
    this.name = name;
  }

  getID(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getDetails(): string[] {
    return [];
  }

  getType(): string {
    return 'Product';
  }

  setID(id: string): void {
    this.id = id;
  }
}
