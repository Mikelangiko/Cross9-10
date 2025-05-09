import { Dessert } from './Dessert';

describe('Dessert', () => {
  it('should return sugarGrams and correct type/details', () => {
    const dessert = new Dessert(1, 'Тірамісу', 120, 25);
    expect(dessert.getsugarGrams()).toBe(25);
    expect(dessert.getType()).toBe('Dessert');
    expect(dessert.getDetails()).toEqual(['Цукор: 25 г']);
  });
});
