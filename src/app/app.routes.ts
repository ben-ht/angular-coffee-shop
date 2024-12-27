import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: AllProductsComponent,
  },
  {
    path: 'products/:id',
    component: CoffeeDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
