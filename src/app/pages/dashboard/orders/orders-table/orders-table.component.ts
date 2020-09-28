import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { IOrder } from 'src/app/interfaces/orders';
import { ShocketioService } from 'src/app/services/shocketio.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements OnInit {
  listOrders: IOrder[] = [];
  loading: boolean;
  constructor(
    private ordersService: OrdersService,
    private shocketioService: ShocketioService
  ) {}

  async ngOnInit() {
    try {
      this.loading = true;
      await this.loadList();
      this.onDataDashboard();
      this.loading = false;
    } catch (error) {}
  }

  private async loadList() {
    try {
      this.listOrders = await this.ordersService.getOrders();
      this.listOrders = this.listOrders.map((item, i) => ({
        pos: i,
        ...item,
      }));
      console.log(this.listOrders, 'loadlist');
    } catch (error) {}
  }

  private onDataDashboard() {
    this.shocketioService.onListen('ordersCompra').subscribe((info: IOrder) => {
      this.loadList();
    });
  }
}
