import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICategory } from '../interfaces/categories';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categoryUrl = `${environment.baseUrl}/categories`;
  private token = localStorage.getItem('token');
  private header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({ token: this.token });
  }

  saveCategory(categoria: ICategory) {
    return this.http
      .post(this.categoryUrl, categoria, { headers: this.header })
      .toPromise();
  }

  updateCategory(categoria: ICategory) {
    return this.http
      .put(this.categoryUrl, categoria, { headers: this.header })
      .toPromise();
  }

  listCategory(): Promise<ICategory[]> {
    return this.http
      .get(this.categoryUrl, { headers: this.header })
      .pipe(
        map((res: ICategory[]) => {
          return res;
        })
      )
      .toPromise();
  }

  deleteCategory(id: string) {
    return this.http
      .delete(`${this.categoryUrl}/${id}`, { headers: this.header })
      .toPromise();
  }

  showCategory(id: string): Promise<ICategory> {
    return this.http
      .get(`${this.categoryUrl}/${id}/show`, { headers: this.header })
      .pipe(
        map((res: ICategory) => {
          return res;
        })
      )
      .toPromise();
  }
}
