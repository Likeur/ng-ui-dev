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
  logoPath = '../../../assets/images/ng ui new logo.png'
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
    {
      id: 5,
      title: 'Ressources',
      route: '/ressources'
    },
  ]

  isDarkmode(){
    function darkmode(){
     
      const darkMode = document.querySelector('#darkmode')!
      const darkModeIcon = document.querySelector('#darkmodeicon')!

      document.documentElement.classList.toggle('dark')
      darkMode.classList.toggle('rotate-45')
      if (document.documentElement.className == 'dark'){
          darkModeIcon.className = 'bx bx-sun'
      } else{
          darkModeIcon.className = 'bx bxs-moon'
      }
    }

    darkmode()
  }

  NavToggle(){
    const  navBox = document.querySelector('#navbox')!
    const barUn = document.querySelector('.bar-un')!
    const barDeux = document.querySelector('.bar-deux')!
    const navbtn = document.querySelector('#navbtn')!

    navBox.classList.toggle('scale-0')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('mt-2')
    barUn.classList.toggle('absolute')

    barDeux.classList.toggle('-rotate-45')
    navbtn.classList.toggle('rotate-180')
    navbtn.classList.toggle('mt-2')
  }
}
