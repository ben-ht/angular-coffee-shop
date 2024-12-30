import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../interfaces/order';

@Component({
  selector: 'app-order-confirmation',
  imports: [],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css',
})
export class OrderConfirmationComponent {
  private readonly orderService = inject(OrderService);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  order: Order | undefined;

  constructor() {
    let orderId = this.route.snapshot.queryParams['orderId'];
    this.orderService
      .getOrder(orderId)
      .subscribe((order) => (this.order = order));
  }
}
