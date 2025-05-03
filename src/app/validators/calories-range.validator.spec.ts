import { FormControl } from '@angular/forms';
import { caloriesRangeValidator } from './calorirange.validator';

describe('caloriesRangeValidator', () => {
  it('should return null for valid value within range', () => {
    const control = new FormControl(500);
    const validator = caloriesRangeValidator(300, 1500);
    expect(validator(control)).toBeNull();
  });

  it('should return error for value below min', () => {
    const control = new FormControl(250);
    const validator = caloriesRangeValidator(300, 1500);
    expect(validator(control)).toEqual({
      outOfRange: 'Calories must be between 300 and 1500',
    });
  });

  it('should return error for value above max', () => {
    const control = new FormControl(2000);
    const validator = caloriesRangeValidator(300, 1500);
    expect(validator(control)).toEqual({
      outOfRange: 'Calories must be between 300 and 1500',
    });
  });

  it('should return error if value is not a number', () => {
    const control = new FormControl('abc');
    const validator = caloriesRangeValidator();
    expect(validator(control)).toEqual({
      notNumber: 'Calories must be a number',
    });
  });
});
