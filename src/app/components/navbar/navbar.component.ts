import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks = [
    {
      id: 1,
      title: 'home',
      route: '/home'
    },
    {
      id: 2,
      title: 'blocks',
      route: '/blocks'
    },
    {
      id: 3,
      title: 'Docs',
      route: '/docs'
    },
    {
      id: 4,
      title: 'Templates',
      route: '/templates'
    },
]
}
