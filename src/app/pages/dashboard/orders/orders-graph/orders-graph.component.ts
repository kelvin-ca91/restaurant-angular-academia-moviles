import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';
import { ShocketioService } from 'src/app/services/shocketio.service';
import { IOrdersDashboard } from 'src/app/interfaces/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-graph',
  templateUrl: './orders-graph.component.html',
  styleUrls: ['./orders-graph.component.scss'],
})
export class OrdersGraphComponent implements OnInit, OnDestroy {
  loading: boolean;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor(
    private shocketioService: ShocketioService,
    private ordersService: OrdersService
  ) {}

  async ngOnInit() {
    try {
      this.loading = true;
      await this.loadDashboard();
      this.onDataDashboard();
      this.loading = false;
    } catch (error) {}
  }

  ngOnDestroy() {
    this.shocketioService.disconnect();
  }

  private onDataDashboard() {
    this.shocketioService
      .onListen('ordersDashboard')
      .subscribe((info: IOrdersDashboard) => {
        this.barChartLabels = info.label;
        this.barChartData = info.data;
      });
  }

  private async loadDashboard() {
    try {
      const info = await this.ordersService.getOrderDashboard();

      this.barChartLabels = info.label;
      this.barChartData = info.data;
    } catch (error) {
      throw error;
    }
  }
}
