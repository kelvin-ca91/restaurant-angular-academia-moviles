import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICredentials } from 'src/app/interfaces/auth';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {}

  login({ username, password }: ICredentials): Promise<string> {
    const codAuth = btoa(`${username}:${password}`);
    this.headers = new HttpHeaders({ Authorization: `Basic ${codAuth}` });
    // this.headers = new HttpHeaders({ token: localStorage.getItem('token') });
    return this.http
      .post(`${environment.baseUrl}/auth`, {}, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res.token;
        })
      )
      .toPromise();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
