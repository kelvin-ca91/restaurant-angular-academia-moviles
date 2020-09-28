import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IOrder, IOrdersDashboard } from '../interfaces/orders';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private token = localStorage.getItem('token');
  private header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ token: this.token });
  }

  getOrders(): Promise<IOrder[]> {
    return this.http
      .get(`${environment.baseUrl}/orders`, { headers: this.header })
      .pipe(
        map((res: IOrder[]) => {
          return res;
        })
      )
      .toPromise();
  }

  getOrderDashboard(): Promise<IOrdersDashboard> {
    return this.http
      .get(`${environment.baseUrl}/orders/dashboard`, { headers: this.header })
      .pipe(
        map((res: IOrdersDashboard) => {
          return res;
        })
      )
      .toPromise();
  }
}
