import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeCodeComponent } from '../../components/home-code/home-code.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule, FooterComponent, HomeCodeComponent],
  templateUrl: './landingpage.component.html',
})
export default class LandingpageComponent {
  blockElement = [
    {
      id : 1,
      name : "Hero-section",
      image : '../../../assets/images/hero.png',
      route : '../blocks/herosection',
      quantity: 3
    },
    {
      id : 2,
      name : "feature-section",
      image : '../../../assets/images/futuresec.png',
      route : '../blocks/featuresec',
      quantity: 2
    },
    {
      id : 3,
      name : "blog-section",
      image : '../../../assets/images/blogsec.png',
      route : '../blocks/blogsec',
      quantity: 2
    },
    {
      id : 4,
      name : "footer-section",
      image : '../../../assets/images/footersec.png',
      route : '../blocks/footer',
      quantity: 5
    },
    {
      id : 5,
      name : "Cta",
      image : '../../../assets/images/footersec.png',
      route : '../blocks/footer',
      quantity: 5
    },
    {
      id : 6,
      name : "Navbar",
      image : '../../../assets/images/footersec.png',
      route : '../blocks/footer',
      quantity: 5
    },
    {
      id : 7,
      name : "logocloud",
      image : '../../../assets/images/footersec.png',
      route : '../blocks/footer',
      quantity: 5
    },
    {
      id : 8,
      name : "team",
      image : '../../../assets/images/footersec.png',
      route : '../blocks/footer',
      quantity: 5
    },
    {
      id : 9,
      name : "pricing",
      image : '../../../assets/images/footersec.png',
      route : '../blocks/footer',
      quantity: 5
    }
  ]
}
