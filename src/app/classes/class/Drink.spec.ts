import { Drink } from './Drink';

describe('Drink', () => {
  it('should return volume, mainIngredient, type and details', () => {
    const drink = new Drink(2, 'Кола', 40, 500, 'Так');
    expect(drink.getVolume()).toBe(500);
    expect(drink.getmainIngredient()).toBe('Так');
    expect(drink.getType()).toBe('Drink');
    expect(drink.getDetails()).toEqual(['Обʼєм: 500 мл', 'Газований: Так']);
  });
});
