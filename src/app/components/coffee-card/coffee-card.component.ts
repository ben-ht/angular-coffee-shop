import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../interfaces/product';
import { CoffeeDetailsComponent } from '../coffee-details/coffee-details.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-coffee-card',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css',
})
export class CoffeeCardComponent {
  private readonly cartService = inject(CartService);
  product = input<Product>();
  dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(CoffeeDetailsComponent, {
      width: '1000px',
      maxWidth: '1000px',
      data: this.product(),
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { product, quantity } = result;
        const cartItem: CartItem = {
          product,
          quantity: Number(quantity.value),
        };
        this.cartService.addToCart(cartItem);
      }
    });
  }
}
