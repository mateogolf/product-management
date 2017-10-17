import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProductService } from './../product.service';
import { Product } from './../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product = {
    title: "",
    price: 0.00,
    image_url: ""
  };
  idx:string="";
  constructor(
    private _service: ProductService,
    private _route: ActivatedRoute//,
    // private _location: Location
  ) {
    this._route.paramMap.subscribe(params => {
      this.idx = params.get('id');
    })
  }
  onSubmit(){
    this._service.updateProduct(this.idx,this.product,(product)=>{
      this.product = product;
    })
  }
  ngOnInit() {
    this._route.paramMap
      .switchMap(params =>
        this._service.productAt(params.get('id'))
      )
      .subscribe(product => this.product = product,
      console.log);
  }

  // goBack(): void {
  //   this._location.back();
  // }
  deleteProduct():void{

  }
}
