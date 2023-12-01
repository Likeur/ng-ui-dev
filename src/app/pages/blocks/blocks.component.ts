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
  componentsLinks = [
    
    {
      id:1,
      title: 'Hero-section',
      route: '/docs/herosection'
    },
    {
      id:2,
      title: 'cta',
      route: '/docs/cta'
    },
    {
      id:3,
      title: 'Navbar',
      route: '/docs/navbar'
    },
    {
      id:4,
      title: 'Features-section',
      route: '/docs/featuresec'
    },
    {
      id:5,
      title: 'Blog-section',
      route: '/docs/blogsec'
    },
    {
      id:6,
      title: 'Footer-section',
      route: '/docs/footer'
    },
    
  ]
    
}
