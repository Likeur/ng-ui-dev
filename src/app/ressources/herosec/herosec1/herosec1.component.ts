import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-herosec1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './herosec1.component.html',
  styles: ``
})
export class Herosec1Component {
  navLinks = [
    {
      id:1,
      title: 'home',
      route: '/'
    },
    {
      id:2,
      title: 'Project',
      route: '/'
    },
    {
      id:3,
      title: 'Services',
      route: '/'
    },
    {
      id:4,
      title: 'Pricing',
      route: '/'
    },
    {
      id:5,
      title: 'Contact',
      route: '/'
    }
  ]
}   
