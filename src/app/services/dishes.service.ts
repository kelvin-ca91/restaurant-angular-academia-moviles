import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IDish } from '../interfaces/dishes';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private dishUrl = `${environment.baseUrl}/dishes`;
  private token = localStorage.getItem('token');
  private header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ token: this.token });
  }

  saveDish(dish: IDish) {
    return this.http
      .post(this.dishUrl, dish, { headers: this.header })
      .toPromise();
  }

  listDish(): Promise<IDish[]> {
    return this.http
      .get(this.dishUrl, { headers: this.header })
      .pipe(
        map((res: IDish[]) => {
          return res;
        })
      )
      .toPromise();
  }

  showDish(dishId: string): Promise<IDish> {
    return this.http
      .get(`${this.dishUrl}/${dishId}/show`, { headers: this.header })
      .pipe(
        map((res: IDish) => {
          return res;
        })
      )
      .toPromise();
  }

  updateDish(dish: IDish) {
    return this.http
      .put(this.dishUrl, dish, { headers: this.header })
      .toPromise();
  }

  deleteDish(dishId: string) {
    return this.http
      .delete(`${this.dishUrl}/${dishId}`, { headers: this.header })
      .toPromise();
  }
}
