import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator } from '../validators/name.validator';
import { caloriesRangeValidator } from '../validators/calorirange.validator';

export function formConstructor(
  type: string,
  productForm: FormGroup,
  fb: FormBuilder
) {
  const controlsToRemove = [
    'calories',
    'weight',
    'volume',
    'mainIngredient',
    'sugarGrams',
  ];
  controlsToRemove.forEach((control) => {
    if (productForm.contains(control)) {
      productForm.removeControl(control);
    }
  });

  switch (type) {
    case 'ReadyMeal':
      productForm.addControl(
        'calories',
        fb.control(0, [Validators.required, caloriesRangeValidator(300, 1500)])
      );
      productForm.addControl('weight', fb.control(0, Validators.min(1)));
      break;
    case 'Drink':
      productForm.addControl('volume', fb.control(0, Validators.min(1)));
      productForm.addControl(
        'calories',
        fb.control(0, [Validators.required, caloriesRangeValidator(300, 1500)])
      );

      break;
    case 'Dessert':
      productForm.addControl('sugarGrams', fb.control(0, Validators.min(1)));
      productForm.addControl(
        'calories',
        fb.control(0, [Validators.required, caloriesRangeValidator(300, 1500)])
      );
      break;
    case 'Sause':
      productForm.addControl('volume', fb.control(0, Validators.min(1)));
      productForm.addControl(
        'calories',
        fb.control(0, [Validators.required, caloriesRangeValidator(300, 1500)])
      );
      break;
    default:
      throw new Error('Invalid product type');
  }
}
