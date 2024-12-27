import { Component, computed, inject, input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartItem } from '../../interfaces/cart-item';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'tr[app-cart-item]',
  imports: [MatIconModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent implements OnInit {
  ngOnInit(): void {
    this.selectedQuantity = this.cartItem()?.quantity;
  }

  private readonly cartService = inject(CartService);
  cartItem = input<CartItem>();
  quantityOptions = Array.from({ length: 99 }, (_, i) => i + 1);
  selectedQuantity: number | undefined;

  itemSubtotal = computed(() => {
    const item = this.cartItem();
    return item?.product?.price && item?.quantity
      ? item.product.price * item.quantity
      : 0;
  });

  updateQuantity() {
    this.cartService.updateQuantity(
      this.cartItem()!,
      Number(this.selectedQuantity)!
    );
  }

  removeItemFromCart() {
    this.cartService.removeFromCart(this.cartItem()!);
  }
}
