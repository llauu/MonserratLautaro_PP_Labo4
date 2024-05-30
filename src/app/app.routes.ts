import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)},
    // {path: 'ahorcado', loadComponent: () => import('./components/ahorcado/ahorcado.component').then(m => m.AhorcadoComponent)},
    // {path: 'mayor-o-menor', loadComponent: () => import('./components/mayor-o-menor/mayor-o-menor.component').then(m => m.MayorOMenorComponent)},
    // {path: 'preguntados', loadComponent: () => import('./components/preguntados/preguntados.component').then(m => m.PreguntadosComponent)},
    // {path: 'el-tesoro', loadComponent: () => import('./components/el-tesoro/el-tesoro.component').then(m => m.ElTesoroComponent)},


    // {path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];
