import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
  }

  public isTokenValid(): boolean {
    const token = sessionStorage.getItem('token');
    if (token && !this.helper.isTokenExpired(token)) {
      console.log('token valid');
      return true;
    } else {
      console.log('expired');
      return false;
    }
  }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/api/customer');
  }

  public saveCustomer(customer: Customer): Observable<any> {
    return this.http.post('/api/customer', customer);
  }

  public deleteCustomer(id: any): Observable<any> {
    return this.http.delete('/api/customer/' + id);
  }

  public getPieData(): Observable<any> {
    return this.http.get<any[]>('/api/pie-data');
  }

  public getColumnData(): Observable<any> {
    return this.http.get<any[]>('/api/column-data');
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/auth/login', {username, password}, {headers});
  }

  public logout(): void {
    console.log('logout!');
    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  public getTime(): Observable<string> {
    return this.http.get<string>('/api/time');
  }
}
