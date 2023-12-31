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
      title: 'Installation',
      route: '/docs/getstarted'
    }
  ]


  NavToggle(){
    const sideBox = document.querySelector('#sidebox')!
    const barUn = document.querySelector('.bar-un')!
    const barDeux = document.querySelector('.bar-deux')!
    const navbtn = document.querySelector('#navbtn')!

    sideBox.classList.toggle('w-64')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('mt-2')
    barUn.classList.toggle('absolute')

    barDeux.classList.toggle('-rotate-45')
    navbtn.classList.toggle('rotate-180')
    navbtn.classList.toggle('mt-2')
  }
}
