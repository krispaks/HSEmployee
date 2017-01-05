import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(private router: Router){}

    login(): void {
        // logic for login
        this.router.navigate(['/employee']);
    }

    forgotPassword(): void {
        // logic for forgot password
    }

    rememberMe(): void {
        // logic for remember me
    }
}