import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import * as hello from 'karthikhellomodule';
import { LoggerService } from '../logger.service';
import { CartService } from 'shared-mfe-lib';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ids: number[] = [];
  message: string = "";
  constructor(private svc: CartService) { }

  ngOnInit(): void 
  {
    this.message = hello.SayHello();
    
    for(let i=0 ; i<5 ; i++)
    {
      this.ids.push(faker.datatype.number());
    }
    
  }
}
