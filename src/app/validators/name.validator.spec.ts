import { FormControl } from '@angular/forms';
import { nameValidator } from './name.validator';

describe('nameValidator', () => {
  const validator = nameValidator();

  it('should return null for valid Ukrainian name', () => {
    const control = new FormControl('Олександр');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return null for valid Latin name', () => {
    const control = new FormControl('John Doe');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return error for name with numbers', () => {
    const control = new FormControl('Марія123');
    const result = validator(control);
    expect(result).toEqual({
      invalidName: 'Поле повинно містити тільки літери',
    });
  });

  it('should return error for name with special characters', () => {
    const control = new FormControl('Іван@');
    const result = validator(control);
    expect(result).toEqual({
      invalidName: 'Поле повинно містити тільки літери',
    });
  });

  it('should return error for empty string', () => {
    const control = new FormControl('');
    const result = validator(control);
    expect(result).toEqual({
      invalidName: 'Поле повинно містити тільки літери',
    });
  });
});
