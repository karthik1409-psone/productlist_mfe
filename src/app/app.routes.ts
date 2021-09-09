import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
    {
        path: '', 
        component: HomeComponent
    },
    {
        path: 'productlist',
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
    },
];

export default RouterModule.forRoot(routes);