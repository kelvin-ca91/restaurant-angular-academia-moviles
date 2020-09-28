import { Routes, RouterModule } from '@angular/router';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { FormDishesComponent } from './form-dishes/form-dishes.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListDishesComponent,
  },
  {
    path: 'new',
    component: FormDishesComponent,
  },
  {
    path: ':dishId/edit',
    component: FormDishesComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

export const DishesRoutes = RouterModule.forChild(routes);
