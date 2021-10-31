import { Component, OnInit } from '@angular/core';
import { ClarityIcons, homeIcon, userIcon } from '@cds/core/icon';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    user: string | null;

    constructor(private restService: RestService) {
        this.user = localStorage.getItem('user');
        ClarityIcons.addIcons(userIcon);
    }

    ngOnInit(): void {
    }

}
