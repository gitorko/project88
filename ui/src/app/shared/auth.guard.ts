import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../services/rest.service';

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
