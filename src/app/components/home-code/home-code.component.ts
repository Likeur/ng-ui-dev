import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsDirective } from 'ngx-highlight-js';

@Component({
  selector: 'app-home-code',
  standalone: true,
  imports: [CommonModule, HighlightJsDirective],
  templateUrl: './home-code.component.html',

})
export class HomeCodeComponent {

  snippet = `
  <main class="flex justify-center relative">
  <nav class="w-screen bg-white/40 lg:bg-white dark:bg-gray-950 duration-300 flex items-center justify-between overflow-hidden border-b dark:border-white/5 p-2 px-5">
      <div class="flex items-center ">
          <div>
              <a routerLink="/home">
                  <img [src]="logoPath" width="50" alt="">
              </a>
          </div>
          <ul id="navbox" class="flex scale-0 lg:scale-100 flex-col p-6 border lg:border-none lg:p-0 h-[100vh] left-0 lg:h-min w-full lg:w-min bg-white/80 backdrop-blur-xl lg:bg-transparent absolute z-40 top-0 lg:relative lg:flex-row duration-300 items-left lg:ml-10">
              @for (item of navLinks; track item.id) {
                  <li (click)="NavToggle()" class="ml-3 mt-2 lg:mt-0 text-gray-700 dark:text-white/80 font-light hover:text-blue-600/80 duration-300"><a routerLink="{{item.route}}" routerLinkActive="text-blue-600/80"> {{item.title}} </a></li>
              }
          </ul>
      </div>
      <div class="flex items-center border-l dark:border-white/5 p-2">
          <a href="https://github.com/Likeur/ng-ui-dev" class="text-xl text-gray-700 relative top-0.5 dark:text-white/80"><i class="bx bxl-github"></i></a>
          <button (click)="isDarkmode()" id="darkmode" class="text-xl text-gray-700 dark:text-yellow-400 h-6 w-6 ml-2 rounded-full p-2 flex justify-center items-center duration-300 dark:text-white/80"><i class='bx bxs-moon' id="darkmodeicon"></i></button>
          <button id="navbtn" (click)="NavToggle()" class="ml-2 relative z-50 lg:hidden duration-300">
              <span class="bar-un h-0.5 w-6 duration-300 block bg-gray-700 dark:bg-white rounded-full"></span>
              <span class="bar-deux h-0.5 w-6 relative duration-300 block mt-2 bg-gray-700 dark:bg-white rounded-full"></span>
          </button>
      </div>
  </nav>
</main>
  
  `
}
