import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { map, Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apollo = inject(Apollo);

  getAllProducts(): Observable<Product[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          {
            allProducts {
              id
              name
              description
              price
              productType
              image
            }
          }
        `,
      })
      .valueChanges.pipe(map((result: any) => result.data.allProducts));
  }
}
