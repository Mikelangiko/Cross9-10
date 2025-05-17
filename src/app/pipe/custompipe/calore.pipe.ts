import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calories',
})
export class CaloriesPipe implements PipeTransform {
  transform(value: string): string {
    if (value.startsWith('Калорійність: ')) {
      const caloriesStr = value.replace('Калорійність: ', '').trim();
      const calories = parseFloat(caloriesStr);

      let category: string;
      if (calories < 300) {
        category = 'Мало';
      } else if (calories >= 300 && calories <= 800) {
        category = 'Нормально';
      } else {
        category = 'Багато';
      }

      return `Калорійність: ${category}`;
    }
    return value;
  }
}
