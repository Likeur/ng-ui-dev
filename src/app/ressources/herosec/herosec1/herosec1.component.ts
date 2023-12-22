import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-herosec1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<section class=" ">
  <nav class="p-4 flex sticky z-50 top-0 border-b bg-white dark:bg-gray-950 dark:backdrop-blur-lg backdrop-blur-lg border-black/5 justify-between items-center">
     <div class="flex items-center">
          <div class="flex items-center rotate-12">
              <span class="block h-4 w-2 bg-blue-600"></span>
              <span class="block h-4 w-2 bg-blue-900 ml-0.5 mt-2"></span>
          </div>
          <a class="ml-2 font-bold text-lg">Arch & Co</a>
     </div> 
     <ul id="navbar" class="flex scale-x-0 h-screen lg:h-min lg:scale-x-100 origin-left overflow-hidden duration-300 p-5 lg:p-0 bg-white z-40 top-0 w-full left-0 lg:w-min lg:bg-transparent flex-col lg:flex-row absolute lg:relative lg:items-center">
      @for (item of navLinks; track item.id) {
          <li class="ml-3 mt-2 lg:mt-0"><a (click)="NavToggle()" routerLink="{{item.route}}" routerLinkActive="text-black" class="text-gray-600 block hover:text-blue-950"> {{item.title}} </a></li>
      }
     </ul>
     <div>
      <button class="bg-blue-600 text-white p-2 rounded-lg duration-300 border dark:border-white/50 dark:bg-gray-900 dark:text-white/80 border-opacity-10 hover:bg-white text-sm hover:text-black">Get in touch</button>
      <button id="navbtn" (click)="NavToggle()" class="ml-2 relative z-50 lg:hidden duration-300">
          <span class="bar h-0.5 w-6 duration-300 block bg-gray-700 dark:bg-white rounded-full"></span>
          <span class="bar2 h-0.5 w-6 relative duration-300 block mt-2 bg-gray-700 dark:bg-white rounded-full"></span>
      </button>
     </div>
  </nav>
  <section class="container relative z-0 mx-auto p-4 lg:p-6 grid mt-5 gap-4 lg:grid-cols-2">
      <div>
          <div>
              <div class="flex flex-col text-4xl lg:text-6xl font-bold">
                  <span class="border p-2 border-dashed border-blue-600 bg-blue-200/30 w-min text-blue-600">Designing</span>
                  <span class="mt-2 text-3xl lg:text-6xl">Tomorrow, Today</span>
              </div>
              <p class="text-gray-500 w-[70vw] lg:w-full text-sm lg:text-lg mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est labore .</p>
          </div>
          <div class="flex items-center mt-5">
              <button class="p-2 px-4 font-light border bg-blue-600 duration-300 hover:bg-white hover:text-black text-white rounded-lg">Connect</button>
              <button class="p-2 ml-2 font-light px-4 border rounded-lg hover:bg-gray-100 duration-300">Explore</button>
          </div>

          <div class="flex justify-start -left-14 relative lg:-left-0 mt-8 scale-75 lg:scale-100">
              <div class="flex flex-col items-center justify-center">
                  <span class="text-3xl font-medium">300+</span>
                  <p class="text-gray-700">Project Done</p>
              </div>
              <div class="flex flex-col ml-5 items-center justify-center">
                  <span class="text-3xl font-medium">70+</span>
                  <p class="text-gray-700">Happy Client</p>
              </div>
              <div class="flex flex-col ml-5 items-center justify-center">
                  <span class="text-3xl font-medium">30+</span>
                  <p class="text-gray-700">Fine ArtWork</p>
              </div>
          </div>
      </div>
      <div>
          <div class="flex relative -left-10 lg:left-10 mt-5 scale-75 lg:scale-100">
              <div>
                  <div>

                  </div>
                  <div class="h-72 w-52 overflow-hidden object-cover mt-16 bg-gray-200 rounded-lg">
                      <img src="https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=600" alt="design image">
                  </div>
              </div>
              <div class="h-72 w-52 lg:scale-125 overflow-hidden object-cover bg-gray-200 ml-6 lg:ml-12">
                  <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600" class="scale-110" alt="pc image">
              </div>
          </div>
      </div>
  </section>
  <section class="block h-[30vh]"></section>
</section>`,
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

  NavToggle(){
    const  navBox = document.querySelector('#navbar')!
    const barUn = document.querySelector('.bar')!
    const barDeux = document.querySelector('.bar2')!

    navBox.classList.toggle('scale-x-0')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('mt-2')
    barUn.classList.toggle('absolute')

    barDeux.classList.toggle('-rotate-45')
  }
}   
