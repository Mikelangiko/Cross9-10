import { ProductFactory } from './ProductFactory';
import { ReadyMeal } from './ReadyMeal';
import { Drink } from './Drink';
import { Dessert } from './Dessert';
import { Sauce } from './Sause';

describe('ProductFactory', () => {
  it('should create a ReadyMeal', () => {
    const data = {
      id: 1,
      name: 'Піца',
      price: 200,
      type: 'ReadyMeal',
      calories: 800,
      weight: 500,
    };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(ReadyMeal);
    expect(product.getType()).toBe('ReadyMeal');
  });

  it('should create a Drink', () => {
    const data = {
      id: 2,
      name: 'Сік',
      price: 50,
      type: 'Drink',
      volume: 300,
      mainIngredient: 'Апельсин',
    };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(Drink);
    expect(product.getType()).toBe('Drink');
  });

  it('should create a Dessert', () => {
    const data = {
      id: 3,
      name: 'Торт',
      price: 120,
      type: 'Dessert',
      sugarGrams: 40,
    };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(Dessert);
    expect(product.getType()).toBe('Dessert');
  });

  it('should create a Sauce', () => {
    const data = {
      id: 4,
      name: 'Соус барбекю',
      price: 30,
      type: 'Sauce',
      volume: 100,
    };
    const product = ProductFactory.createProduct(data);
    expect(product).toBeInstanceOf(Sauce);
    expect(product.getType()).toBe('Sauce');
  });

  it('should throw error for unknown type', () => {
    const data = {
      id: 5,
      name: 'Щось незрозуміле',
      price: 10,
      type: 'Unknown',
    };
    expect(() => ProductFactory.createProduct(data)).toThrowError(
      'Unknown product type'
    );
  });
});
