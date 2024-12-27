import { Component, inject, OnInit, signal } from '@angular/core';
import { CoffeeCardComponent } from '../../components/coffee-card/coffee-card.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [CoffeeCardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);

  products = signal<Product[]>([]);
  confirmationMessage = signal<string>('');

  constructor() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const navigation = this.router.getCurrentNavigation();
        const message = navigation?.extras.state?.['message'];
        this.confirmationMessage.set(message);
      }
    });
  }
}
