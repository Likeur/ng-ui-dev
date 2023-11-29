import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './landingpage.component.html',
})
export default class LandingpageComponent {
  blockElement = [
    {
      id : 1,
      name : "Hero-section",
      image : '../../../assets/images/hero.png',
      route : '../docs/herosection',
      quantity: 3
    },
    {
      id : 2,
      name : "feature-section",
      image : '../../../assets/images/futuresec.png',
      route : '../docs/featuresec',
      quantity: 2
    },
    {
      id : 3,
      name : "blog-section",
      image : '../../../assets/images/blogsec.png',
      route : '../docs/blogsec',
      quantity: 2
    },
    {
      id : 4,
      name : "footer-section",
      image : '../../../assets/images/footersec.png',
      route : '../docs/footer',
      quantity: 5
    },
    {
      id : 5,
      name : "Cta",
      image : '../../../assets/images/footersec.png',
      route : '../docs/footer',
      quantity: 5
    },
    {
      id : 6,
      name : "Navbar",
      image : '../../../assets/images/footersec.png',
      route : '../docs/footer',
      quantity: 5
    }
  ]
}
