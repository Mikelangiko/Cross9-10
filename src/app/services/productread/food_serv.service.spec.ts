import { FoodReadService } from 'src/app/services/productread/food_serv.service';

import { ConfigService } from '../clasif/typefood.service';
import { ProductType } from 'src/app/classes/class/ProductName';
import { ReadyMeal } from 'src/app/classes/class/ReadyMeal';
import { IProduct } from 'src/app/classes/interface/IProduct';

describe('FoodReadService', () => {
  let service: FoodReadService;
  let mockConfigService: any;

  beforeEach(() => {
    mockConfigService = {
      type$: {
        subscribe: (callback: any) => {
          callback('ReadyMeal');
          return { unsubscribe() {} };
        },
      },
      getCurrentType: () => 'ReadyMeal',
    };

    service = new FoodReadService(mockConfigService);
  });

  it('should add a product and update search list', () => {
    const meal = new ReadyMeal(0, 'Плов', 150, 600, 400);
    service.addProduct(meal);

    expect(service.products.length).toBe(1);
    expect(service.products[0].getID()).toBe(1);
    expect(service.searchProducts.length).toBe(1);
    expect(service.searchProducts[0].getType()).toBe('ReadyMeal');
  });

  it('should edit a product and keep ID', () => {
    const meal = new ReadyMeal(0, 'Плов', 150, 600, 400);
    service.addProduct(meal);

    const edited = new ReadyMeal(1, 'Ризотто', 170, 550, 380);
    service.editProduct(edited);

    expect(service.products[0].getName()).toBe('Ризотто');
    expect(service.products[0].getID()).toBe(1);
  });

  it('should delete a product and reassign IDs', () => {
    const meal1 = new ReadyMeal(0, 'Плов', 150, 600, 400);
    const meal2 = new ReadyMeal(0, 'Ризотто', 170, 550, 380);
    service.addProduct(meal1);
    service.addProduct(meal2);

    service.deleteProduct(1);

    expect(service.products.length).toBe(1);
    expect(service.products[0].getName()).toBe('Ризотто');
    expect(service.products[0].getID()).toBe(1);
  });

  it('should search by product type', () => {
    const meal = new ReadyMeal(0, 'Плов', 150, 600, 400);
    service.addProduct(meal);

    service.search('ReadyMeal');
    expect(service.searchProducts.length).toBe(1);

    service.search('Drink');
    expect(service.searchProducts.length).toBe(0);
  });
});
