import { Routes } from '@angular/router';

export const PagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list-of-heroes/list-of-heroes.component').then(m => m.ListOfHerosComponent),
  },
];

export class AppRoutingModule {}
