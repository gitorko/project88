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
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<Customer[]>('/api/customer', {headers});
  }

  public saveCustomer(customer: Customer): Observable<any> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post('/api/customer', customer, {headers});
  }

  public deleteCustomer(id: any): Observable<any> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.delete('/api/customer/' + id, {headers});
  }

  public getPieData(): Observable<any> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any[]>('/api/pie-data', {headers});
  }

  public getColumnData(): Observable<any> {
    const token = 'Bearer ' + sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any[]>('/api/column-data', {headers});
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('/api/auth/login', {username, password}, {headers});
  }

  public getTime(): Observable<string> {
    return this.http.get<string>('/api/time');
  }
}
