import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Herosec1Component } from '../../../ressources/herosec/herosec1/herosec1.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, Herosec1Component],
  templateUrl: './hero-section.component.html',
})
export default class HeroSectionComponent {

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
}
