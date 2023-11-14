import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, SideBarComponent, RouterOutlet, RouterModule],
  templateUrl: './docs.component.html',
})
export default class DocsComponent {

}
