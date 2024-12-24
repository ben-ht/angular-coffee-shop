import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-coffee-card',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css',
})
export class CoffeeCardComponent {
  product = input<Product>();
}
