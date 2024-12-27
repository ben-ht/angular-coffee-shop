import { Component, computed, inject } from '@angular/core';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, MatRippleModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  cartItems = computed(() => this.cartService.getCartItems());

  totalPrice = computed(() =>
    this.cartItems()
      .map((item) => item.product.price * item.quantity)
      .reduce((a, b) => a + b, 0)
  );

  checkout() {
    this.router.navigate(['/products'], {
      state: { message: 'Checkout successful!' },
    });
  }
}
