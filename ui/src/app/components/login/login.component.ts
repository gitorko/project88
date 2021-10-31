import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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
        const user = localStorage.getItem('user');
    }

    onSubmit(): void {
        this.restService.getToken(this.loginForm.getRawValue())
            .subscribe(data => {
                console.log("data {}", data);
                const res = data.split(' ');
                localStorage.setItem('user', res[0]);
                localStorage.setItem('token', res[1]);
                this.router.navigate(['/']).then(() => {
                    window.location.reload();
                });
            }, error => {
              this.loginError = true;
            });
    }

}
