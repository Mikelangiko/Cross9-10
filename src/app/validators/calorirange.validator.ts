import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function caloriesRangeValidator(
  min: number = 300,
  max: number = 1500
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = +control.value;

    if (isNaN(value)) {
      return { notNumber: 'Calories must be a number' };
    }

    if (value < min || value > max) {
      return { outOfRange: `Calories must be between ${min} and ${max}` };
    }

    return null;
  };
}
