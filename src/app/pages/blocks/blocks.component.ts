import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BlocknavComponent } from './blocknav/blocknav.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BlocknavComponent, RouterOutlet, RouterModule],
  templateUrl: './blocks.component.html',
  styles: ``
})
export default class BlocksComponent {
  
    
}
