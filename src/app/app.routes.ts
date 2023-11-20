import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        title: 'ng-ui',
        loadComponent: () => import ('./pages/landingpage/landingpage.component')
    },
    {
        path: 'blocks',
        title: 'block-ng-ui',
        loadComponent: () => import ('./pages/blocks/blocks.component')
    },
    {
        path: 'docs',
        title: 'docs-ng-ui',
        loadComponent: () => import ('./pages/docs/docs.component'),
        children:[
            {
                path: 'introduction',
                title: 'introduction',
                loadComponent: () => import ('./pages/docs/introduction/introduction.component'),
            },
            {
                path: 'getstarted',
                title: 'getting started',
                loadComponent: () => import ('./pages/docs/get-started/get-started.component'),
            },
            {
                path: 'footer',
                title: 'footer',
                loadComponent: () => import ('./pages/docs/footer/footer.component'),
            },
            {
                path: 'herosection',
                title: 'hero-section',
                loadComponent: () => import ('./pages/docs/hero-section/hero-section.component'),
            },
            {
                path: 'featuresec',
                title: 'feature-section',
                loadComponent: () => import ('./pages/docs/featuresec/featuresec.component'),
            },
            {
                path: 'cta',
                title: 'cta',
                loadComponent: () => import ('./pages/docs/cta/cta.component'),
            },
            {
                path: 'button',
                title: 'button',
                loadComponent: () => import ('./pages/docs/button/button.component'),
            },
            {
                path: '',
                redirectTo: 'introduction',
                pathMatch: 'full'
            },
        ],
    },
    {
        path: 'templates',
        title: 'templates-ng-ui',
        loadComponent: () => import ('./pages/templates/templates.component')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },

];
