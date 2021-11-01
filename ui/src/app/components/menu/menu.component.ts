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

  constructor(private restService: RestService, private router: Router) {
    ClarityIcons.addIcons(homeIcon);
    ClarityIcons.addIcons(userIcon);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
  }

  logout(): void {
    console.log('logout!');
    sessionStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
