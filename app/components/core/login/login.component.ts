import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'

@Component({
    moduleId: module.id,
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private router: Router, private auth: AuthService){}

    login(): void {
        // logic for login
        // call auth service and when successful navigate to employee
        let isLoggedSuccess = this.auth.login();

        if(isLoggedSuccess) {
            this.router.navigate(['/employee']);
        }
        else 
        {
            console.log('login failed');
        }
    }

    forgotPassword(): void {
        // logic for forgot password
    }

    rememberMe(): void {
        // logic for remember me
    }
}