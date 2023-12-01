import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, SideBarComponent, RouterOutlet, RouterModule],
  templateUrl: './docs.component.html',
})
export default class DocsComponent {
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
