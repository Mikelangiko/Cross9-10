import { ReadyMeal } from './ReadyMeal';

describe('ReadyMeal', () => {
  it('should return calories, weight, type and details', () => {
    const meal = new ReadyMeal(4, 'Бургер', 150, 700, 300);
    expect(meal.getcalories()).toBe(700);
    expect(meal.getWeight()).toBe(300);
    expect(meal.getType()).toBe('ReadyMeal');
    expect(meal.getDetails()).toEqual(['Калорійність: 700', 'Вага: 300 мг']);
  });
});
