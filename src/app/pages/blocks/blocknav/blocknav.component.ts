import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blocknav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blocknav.component.html',
})
export class BlocknavComponent {

  toggleBlockMenu(){
    const blockMenu = document.querySelector('#blockmenu')!

    blockMenu.classList.toggle('scale-0')
  }
  blockLinks = [
    {
      id:1,
      title: 'Hero-section',
      route: '/blocks/herosection'
    },
    {
      id:2,
      title: 'cta',
      route: '/blocks/cta'
    },
    {
      id:3,
      title: 'Navbar',
      route: '/blocks/navbar'
    },
    {
      id:4,
      title: 'Features-section',
      route: '/blocks/featuresec'
    },
    {
      id:5,
      title: 'Blog-section',
      route: '/blocks/blogsec'
    },
    {
      id:6,
      title: 'Footer-section',
      route: '/blocks/footer'
    },
    
  ]
}
