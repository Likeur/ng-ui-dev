import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';

@Component({
  selector: 'app-home-code',
  standalone: true,
  imports: [CommonModule , HighlightJsModule],
  templateUrl: './home-code.component.html',

})
export class HomeCodeComponent {

  snippet = `
        
  
  `

  
}
