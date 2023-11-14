import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './blocks.component.html',
  styles: ``
})
export default class BlocksComponent {

}
