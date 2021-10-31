import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private restService: RestService, private router: Router) {
    }

    canActivate(): boolean {
        if (this.restService.isTokenValid()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
