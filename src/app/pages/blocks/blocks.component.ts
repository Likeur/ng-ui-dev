import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './blocks.component.html',
  styles: ``
})
export default class BlocksComponent {

    blockElements = [
      {
        id : 1,
        name : "Hero-section",
        image : '../../../assets/images/hero.png',
        route : '',
        quantity: 3
      },
      {
        id : 2,
        name : "feature-section",
        image : '../../../assets/images/futuresec.png',
        route : '',
        quantity: 2
      },
      {
        id : 3,
        name : "footer-section",
        image : '../../../assets/images/footersec.png',
        route : '',
        quantity: 5
      }
    ]
}
