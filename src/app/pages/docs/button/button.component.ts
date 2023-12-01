import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bouton1Component } from '../../../ressources/button/bouton1/bouton1.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, Bouton1Component],
  templateUrl: './button.component.html',
})
export default class ButtonComponent {

}
