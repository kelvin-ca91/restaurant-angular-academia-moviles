import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { ChartsModule } from 'ng2-charts';
import { OrdersGraphComponent } from './orders/orders-graph/orders-graph.component';
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';
import { DashboardComponent } from './dashboard.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@NgModule({
  declarations: [
    OrdersTableComponent,
    OrdersGraphComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutes,
    ChartsModule,
    NzTableModule,
    NzSpinModule,
  ],
})
export class DashboardModule {}
