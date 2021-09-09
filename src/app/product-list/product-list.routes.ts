import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';

const routes = [
    { 
      path: '', 
      component: ProductsComponent,
      children: [
          { path: 'product/:pid', component: ProductComponent }
      ]
    }
];

export default RouterModule.forChild(routes);