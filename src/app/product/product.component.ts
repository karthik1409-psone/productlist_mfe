import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as faker from 'faker';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productname: string = "";
  id: number = -1;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.route.params.subscribe(
      (params) => {
        this.productname = faker.commerce.productName();
        this.id = params.pid;
      }
    );
  }

}
