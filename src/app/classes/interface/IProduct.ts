export interface IProduct {
  getID(): number;
  getName(): string;
  getPrice(): number;
  getDetails(): string[];
  getType(): string;
  setID(id: number): void;
}
