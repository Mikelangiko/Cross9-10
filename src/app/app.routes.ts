import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lab8',
    loadComponent: () =>
      import('./lab8/lab8/lab8.page').then((m) => m.Lab8Page),
  },
];
