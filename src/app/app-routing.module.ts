import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfHerosComponent } from './pages/list-of-heroes/list-of-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfHerosComponent,
    loadChildren: () => import('./pages/pages-routes').then(m => m.PagesRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
