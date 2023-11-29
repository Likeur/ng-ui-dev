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
        import { Component } from '@angular/core';
        import { CommonModule } from '@angular/common';
        import { RouterModule } from '@angular/router';
        
        @Component({
          selector: 'app-footer',
          standalone: true,
          imports: [CommonModule, RouterModule],
          templateUrl: './footer.component.html',
        })
        export class FooterComponent {
        
        }
  
  `

  
}
