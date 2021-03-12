import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  products: IProduct[] = [];
  imageWidth: number = 20;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: IProduct[];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  ngOnInit(): void {
    console.log('on init');
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
