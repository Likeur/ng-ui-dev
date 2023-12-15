import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { Featuresec1Component } from '../../../ressources/featureSec/featuresec1/featuresec1.component';

@Component({
  selector: 'app-featuresec',
  standalone: true,
  imports: [CommonModule, FooterComponent, Featuresec1Component],
  templateUrl: './featuresec.component.html',
})
export default class FeaturesecComponent {
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
