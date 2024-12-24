import { Component, inject, signal } from '@angular/core';
import { CoffeeCardComponent } from '../../components/coffee-card/coffee-card.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-all-products',
  imports: [CoffeeCardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  private readonly productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  constructor() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products.set(products);
    });
  }
}
