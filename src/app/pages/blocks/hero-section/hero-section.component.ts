import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Herosec1Component } from '../../../ressources/herosec/herosec1/herosec1.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CodeHerosec1Component } from '../../../codes/hero-sec/code-herosec1/code-herosec1.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, Herosec1Component, RouterModule,CodeHerosec1Component, FooterComponent ],
  templateUrl: './hero-section.component.html',
})
export default class HeroSectionComponent {

  iscodeVisible = false

  toggleCode(){
    this.iscodeVisible = !this.iscodeVisible
  }

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

  screenSize = 'w-full'

  desktopView(){
    this.screenSize = 'w-full'
  }
  tabletView(){
    this.screenSize = 'w-[728px]'
  }
  mobileView(){
    this.screenSize = 'w-[524px]'
  }
}
