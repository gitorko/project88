import {Component, OnInit} from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;

  constructor(private restService: RestService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
  }

  onSubmit(): void {
    this.restService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(data => {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('user', data.username);
        sessionStorage.setItem('roles', JSON.stringify(data.roles));
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, error => {
        console.log(error);
        this.loginError = true;
      });
  }

}
