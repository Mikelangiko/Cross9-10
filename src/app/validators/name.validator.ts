import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.value;
    const valid = /^[A-Za-zА-Яа-яЇїІіЄєҐґ\s]+$/.test(name);
    if (valid) {
      return null;
    }
    return { invalidName: 'Поле повинно містити тільки літери' };
  };
}
