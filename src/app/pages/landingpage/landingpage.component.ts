import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './landingpage.component.html',
})
export default class LandingpageComponent {

}
