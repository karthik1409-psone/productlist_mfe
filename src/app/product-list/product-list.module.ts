import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import routes from './product-list.routes';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule, 
    routes
  ]
})
export class ProductListModule { }
