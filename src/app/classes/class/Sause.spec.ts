import { Sauce } from './Sause';

describe('Sauce', () => {
  it('should return volume, type and details', () => {
    const sauce = new Sauce(5, 'Кетчуп', 25, 100);
    expect(sauce.getVolume()).toBe(100);
    expect(sauce.getType()).toBe('Sauce');
    expect(sauce.getDetails()).toEqual(['Обʼєм: 100 мл']);
  });

  it('should throw error if volume is zero or negative', () => {
    expect(() => new Sauce(6, 'Майонез', 20, 0)).toThrowError('volume <= 0');
    expect(() => new Sauce(7, 'Соус', 20, -50)).toThrowError('volume <= 0');
  });
});
