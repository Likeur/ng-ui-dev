import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bouton1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouton1.component.html',
})
export class Bouton1Component {

  btn_name = 'My btn'
}
