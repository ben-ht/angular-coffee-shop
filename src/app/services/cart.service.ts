import { Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cartItems = signal<CartItem[]>([]);

  addToCart(cartItem: CartItem) {
    const newCartItems = [...this.cartItems(), cartItem];
    this.cartItems.set(newCartItems);
  }

  getItemsCount() {
    return this.cartItems()
      .map((item) => item.quantity)
      .reduce((a, b) => a + b, 0);
  }

  getCartItems() {
    return this.cartItems();
  }

  updateQuantity(cartItem: CartItem, quantity: number) {
    const newCartItems = this.cartItems().map((item) => {
      if (item.product.id === cartItem.product.id) {
        return { ...item, quantity };
      }
      return item;
    });

    this.cartItems.set(newCartItems);
  }

  removeFromCart(cartItem: CartItem) {
    this.cartItems.update(() =>
      this.cartItems().filter((item) => item !== cartItem)
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
