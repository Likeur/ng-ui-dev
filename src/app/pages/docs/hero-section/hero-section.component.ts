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

}
