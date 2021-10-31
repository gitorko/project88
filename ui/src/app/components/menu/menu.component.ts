import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClarityIcons, homeIcon, userIcon } from '@cds/core/icon';
import { RestService } from '../../services/rest.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    user: string | null;

    constructor(private restService: RestService, private router: Router) {
        this.user = localStorage.getItem('user');
        ClarityIcons.addIcons(homeIcon);
        ClarityIcons.addIcons(userIcon);
    }

    ngOnInit(): void {
    }

    logout(): void {
        console.log('logout!');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.router.navigate(['/login']).then(() => {
            window.location.reload();
        });
    }
}
