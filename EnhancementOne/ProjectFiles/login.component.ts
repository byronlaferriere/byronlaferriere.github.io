/**
 * This piece of the project calls in Component/AuthenticationService/User to implement more features. 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';

/**
 * describing layouts and selector to be used
 */

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})

/**
 * Creating new class LoginComponent to use in other pieces
 */
export class LoginComponent implements OnInit {
public formError: string = '';
public credentials = {
 name: '',
 email: '',
 password: ''
};
constructor(
 private router: Router,
 private authenticationService: AuthenticationService
) { }

/**
 * supplying the login page with a validator that checks for proper input values
 */
ngOnInit() {}
public onLoginSubmit(): void {
 this.formError = '';
 if (!this.credentials.email || !this.credentials.password) {
 this.formError = 'All fields are required, please try again';
 } else {
 this.doLogin();
 }
}
/**
 * telling program to push data through to console output if login successful
 */

private doLogin(): void {
 this.authenticationService.login(this.credentials)
 .then(() => this.router.navigateByUrl('#'))
 .catch((message) => this.formError = message);
}
}
