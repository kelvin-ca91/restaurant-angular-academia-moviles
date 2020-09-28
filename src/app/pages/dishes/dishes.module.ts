import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDishesComponent } from './list-dishes/list-dishes.component';
import { FormDishesComponent } from './form-dishes/form-dishes.component';
import { DishesRoutes } from './dishes.routing';
import { NzAntDesignModule } from 'src/app/nz-ant-design/nz-ant-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpperCamelCasePipe } from 'src/app/pipes/upper-camel-case.pipe';

@NgModule({
  declarations: [ListDishesComponent, FormDishesComponent, UpperCamelCasePipe],
  imports: [
    CommonModule,
    DishesRoutes,
    NzAntDesignModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class DishesModule {}
