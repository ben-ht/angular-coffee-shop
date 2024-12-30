import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Order } from '../interfaces/order';
import { map, Observable } from 'rxjs';

const PLACE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      code
      message
      order {
        id
        orderDate
        totalPrice
        userId
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  httpClient = inject(HttpClient);
  private readonly apollo = inject(Apollo);

  placeOrder(order: Order): Observable<number> {
    return this.apollo
      .mutate({
        mutation: PLACE_ORDER,
        variables: {
          input: order,
        },
      })
      .pipe(map((result: any) => result.data.createOrder.order.id));
  }

  getOrder(orderId: number): Observable<Order> {
    return this.apollo
      .watchQuery({
        query: gql`
        {
          order(orderId: ${orderId}) {
            id
            orderDate
            totalPrice
            userId
          }
        }
      `,
      })
      .valueChanges.pipe(map((result: any) => result.data.order));
  }
}
