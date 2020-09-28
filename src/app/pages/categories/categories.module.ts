import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { CategoriesRoutes } from './categories.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAntDesignModule } from 'src/app/nz-ant-design/nz-ant-design.module';

@NgModule({
  declarations: [ListCategoriesComponent, FormCategoriesComponent],
  imports: [
    CommonModule,
    NzAntDesignModule,
    CategoriesRoutes,
    ReactiveFormsModule,
  ],
})
export class CategoriesModule {}
