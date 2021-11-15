import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClarityIcons, homeIcon, userIcon} from '@cds/core/icon';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  user: string | null | undefined;

  constructor(private restService: RestService) {
    ClarityIcons.addIcons(homeIcon);
    ClarityIcons.addIcons(userIcon);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
  }

  logout(): void {
    this.restService.logout();
  }
}
