import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'ng-ui',
        loadComponent: () => import ('./pages/landingpage/landingpage.component')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },

];
