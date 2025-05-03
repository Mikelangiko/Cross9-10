import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/classes/interface/IProduct';
import { ProductFactory } from 'src/app/classes/class/ProductFactory';
import { ConfigService } from '../clasif/typefood.service';
import { Subscription } from 'rxjs';
import { ProductType } from 'src/app/classes/class/ProductName';

const API_URL = 'https://api.jsonbin.io/v3/b/67f2622b8960c979a57f3b02';

@Injectable({
  providedIn: 'root',
})
export class FoodReadService {
  public products: IProduct[] = [];
  public searchProducts: IProduct[] = [];

  private typeSub: Subscription;

  constructor(private configService: ConfigService) {
    this.typeSub = this.configService.type$.subscribe((type: ProductType) => {
      this.search(type);
    });
  }

  public load(): void {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        console.log('JSON response:', json);
        const data = json.record.food;
        this.products = data.map((item: any) =>
          ProductFactory.createProduct(item)
        );
        const currentType = this.configService.getCurrentType();
        this.search(currentType);
        console.log('Loaded products:', this.products);
        console.log('Search products after load:', this.searchProducts);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }

  public addProduct(product: IProduct): void {
    product.setID(this.products.length + 1);
    this.products.push(product);
    this.search(this.configService.getCurrentType());
  }

  public editProduct(product: IProduct): void {
    this.products.forEach((item, index) => {
      if (item.getID() === product.getID()) {
        this.products[index] = product;
      }
    });
    this.search(this.configService.getCurrentType());
  }

  public deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.getID() !== id);
    this.products.forEach((product, index) => {
      product.setID(index + 1);
    });
    this.search(this.configService.getCurrentType());
  }

  public search(type: ProductType): void {
    console.log('Searching for products of type:', type);
    this.searchProducts = this.products.filter(
      (product) => product.getType() === type
    );
    console.log('Found products:', this.searchProducts);
  }
}
