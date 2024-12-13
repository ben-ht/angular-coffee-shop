import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, SearchBarComponent],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
