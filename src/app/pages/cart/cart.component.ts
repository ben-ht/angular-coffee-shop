import { Component, computed, inject } from '@angular/core';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';
import { MatRippleModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { Order } from '../../interfaces/order';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, MatRippleModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  private readonly cartService = inject(CartService);
  private readonly orderService = inject(OrderService);

  private readonly router = inject(Router);

  cartItems = computed(() => this.cartService.getCartItems());

  totalPrice = computed(() =>
    this.cartItems()
      .map((item) => item.product.price * item.quantity)
      .reduce((a, b) => a + b, 0)
  );

  checkout() {
    let order: Order = {
      userId: 1,
      totalPrice: this.totalPrice(),
      orderDate: new Date().toISOString(),
    };

    this.orderService.placeOrder(order).subscribe((orderId) => {
      let id = orderId;
      this.cartService.clearCart();

      this.router.navigate(['/order-confirmation'], {
        queryParams: {
          orderId: id,
        },
      });
    });
  }
}
