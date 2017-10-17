import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product:Product = {//new Product("",0,"");
  // product = {
    title: "",
    price: 0.00,
    image_url: ""
  }
  constructor(private _service:ProductService) {}

  onSubmit(){
    console.log(this.product);
    this._service.addProduct(this.product);//,(product)=>{
    // this.product = new Product();
    // })
  }
  ngOnInit() {
  }

}
