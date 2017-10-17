import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  // product:Product;
  
  constructor(
    private _service: ProductService,
    private _route: ActivatedRoute//,
    // private _location: Location
  ) {
    this._route.paramMap.subscribe(params => {
      this._service.deleteAt(params.get('id'));
    })
  }

  ngOnInit() {
  }

}
