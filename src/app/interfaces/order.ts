import { CartItem } from './cart-item';

export interface Order {
  id?: number;
  userId: number;
  totalPrice: number;
  orderDate: string;
}
