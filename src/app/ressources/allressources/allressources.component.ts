import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Herosec1Component } from '../herosec/herosec1/herosec1.component';

@Component({
  selector: 'app-allressources',
  standalone: true,
  imports: [CommonModule, Herosec1Component],
  templateUrl: './allressources.component.html',
})
export default class AllressourcesComponent {

}
