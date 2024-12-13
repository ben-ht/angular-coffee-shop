import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-coffee-card',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.css'
})
export class CoffeeCardComponent {

}
