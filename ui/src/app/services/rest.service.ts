import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    helper = new JwtHelperService();

    constructor(private http: HttpClient, private router: Router) {
    }

    public isTokenValid(): boolean {
        const token = localStorage.getItem('token');
        if (token && !this.helper.isTokenExpired(token)) {
            console.log('token valid');
            return true;
        } else {
            console.log('expired');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return false;
        }
    }

    public getCustomers(): Observable<Customer[]> {
        const token = 'Bearer ' + localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', token);
        return this.http.get<Customer[]>('/api/customer', { headers });
    }

    public saveCustomer(customer: Customer): Observable<any> {
        const token = 'Bearer ' + localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', token);
        return this.http.post('/api/customer', customer, { headers });
    }

    public deleteCustomer(id: any): Observable<any> {
        const token = 'Bearer ' + localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', token);
        return this.http.delete('/api/customer/' + id, { headers });
    }

    public getToken(request: any): Observable<any> {
        return this.http.post('/api/login', request, { responseType: 'text' as 'json' });
    }

    public getPieData(): Observable<any> {
        const token = 'Bearer ' + localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', token);
        return this.http.get<any[]>('/api/pie-data', { headers });
    }

    public getColumnData(): Observable<any> {
        const token = 'Bearer ' + localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', token);
        return this.http.get<any[]>('/api/column-data', { headers });
    }
}
