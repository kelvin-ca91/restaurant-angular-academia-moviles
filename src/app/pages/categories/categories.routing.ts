import { Routes, RouterModule } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListCategoriesComponent,
  },
  {
    path: 'new',
    component: FormCategoriesComponent,
  },
  {
    path: ':categoryId/edit',
    component: FormCategoriesComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

export const CategoriesRoutes = RouterModule.forChild(routes);
