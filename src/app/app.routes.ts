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
        loadComponent: () => import ('./pages/blocks/blocks.component'),
        children:[
            {
                path: 'getstarted',
                title: 'getting started',
                loadComponent: () => import ('./pages/blocks/get-started/get-started.component'),
            },
            {
                path: 'footer',
                title: 'footer',
                loadComponent: () => import ('./pages/blocks/footer/footer.component'),
            },
            {
                path: 'herosection',
                title: 'hero-section',
                loadComponent: () => import ('./pages/blocks/hero-section/hero-section.component'),
            },
            {
                path: 'featuresec',
                title: 'feature-section',
                loadComponent: () => import ('./pages/blocks/featuresec/featuresec.component'),
            },
            {
                path: 'blogsec',
                title: 'blog-section',
                loadComponent: () => import ('./pages/blocks/blogsec/blogsec.component'),
            },
            {
                path: 'cta',
                title: 'cta',
                loadComponent: () => import ('./pages/blocks/cta/cta.component'),
            },
            {
                path: 'button',
                title: 'button',
                loadComponent: () => import ('./pages/blocks/button/button.component'),
            },
            {
                path: '',
                redirectTo: 'herosection',
                pathMatch: 'full'
            },
        ],
    },
    {
        path: 'docs',
        title: 'docs-ng-ui',
        loadComponent: () => import ('./pages/docs/docs.component')
       
    },
    {
        path: 'templates',
        title: 'templates-ng-ui',
        loadComponent: () => import ('./pages/templates/templates.component')
    },
    {
        path: 'ressources',
        title: 'dev-ressource',
        loadComponent: () => import ('./ressources/allressources/allressources.component')
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },

];
