import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products:Product[];
  constructor(private _service: ProductService) { }

  delete(idx){
    this._service.deleteAt(idx);
  }

  ngOnInit() {
    this.getProducts();
  }
  getProducts():void{
    this._service.retrieveProducts()
      .subscribe(products => this.products = products,
        console.error
      );
  }

}
