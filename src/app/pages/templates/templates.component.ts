import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './templates.component.html',

})
export default class TemplatesComponent {

}
