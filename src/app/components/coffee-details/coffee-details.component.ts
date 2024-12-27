import { Component, inject } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-coffee-details',
  imports: [MatRadioModule, MatDialogClose],
  templateUrl: './coffee-details.component.html',
  styleUrl: './coffee-details.component.css',
})
export class CoffeeDetailsComponent {
  readonly product: Product = inject(MAT_DIALOG_DATA);
  quantityOptions = Array.from({ length: 99 }, (_, i) => i + 1);
}
