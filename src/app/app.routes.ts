import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoffeeCardComponent } from './components/coffee-card/coffee-card.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'products',
        component: CoffeeCardComponent
    }
];
