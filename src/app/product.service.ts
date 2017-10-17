import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {
  products: Product[] = PRODUCTS;

  constructor(private _http: Http,private _router:Router) { }

  retrieveProducts(): Observable<Product[]> {
    return new Observable(subscriber => subscriber.next(this.products));
  }
  productAt(id: string): Observable<Product> {
    return new Observable(subscriber => {
      const idx = parseInt(id,10);
      // const foundProduct = this.products.find(product => product._id === parseInt(id, 10));
      if(idx!=NaN){
        if (idx< this.products.length){//foundProduct) {
          // return subscriber.next(foundProduct);
          return subscriber.next(this.products[idx]);
        }
      }
      subscriber.error(new Error(`Unable to find product with id ${id}`));
    });
  }
  
  addProduct(product): void {//,cb): void{
    this.products.push(product);
    this._router.navigate(['/products']);
  }
  updateProduct(id:string,product,cb): void {//,cb): void{
    const idx = parseInt(id, 10);
    if (idx != NaN && idx < this.products.length) {
      this.products[idx] = product;
      this._router.navigate(['/products']);
      cb(this.products[idx]);
    }
  }
  deleteAt(id: string){//: Observable<Product[]> {
    // return new Observable(subscriber => {
      const idx = parseInt(id, 10);
      if (idx != NaN) {
        if (idx < this.products.length) {
          this.products.splice(idx, 1)
          this._router.navigate(['/products']);
        }
      }
    // });
  }

}
