import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {

  sideUpLinks = [
    {
      id : 1,
      title: 'Documentation',
      link : '',
      icon : "bx bx-book-open"
    },
    {
      id : 2,
      title: 'Github',
      link : '',
      icon : "bx bxl-github"
    },
  ]

  sideBarLinks = [
    {
      id:1,
      title: 'Introduction',
      route: '/docs/introduction'
    },
    {
      id:2,
      title: 'Getting started',
      route: '/docs/getstarted'
    }
  ]

  componentsLinks = [
    
    {
      id:1,
      title: 'button',
      route: '/docs/button'
    },
    {
      id:2,
      title: 'cta',
      route: '/docs/cta'
    },
    {
      id:3,
      title: 'Hero-section',
      route: '/docs/herosection'
    },
    {
      id:4,
      title: 'Footer',
      route: '/docs/footer'
    },
    
  ]
}
