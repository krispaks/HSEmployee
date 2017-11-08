import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    username: string = '';
    password: string = '';

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {
    }

    login(): void {
        this.authService.login(this.username, this.password)
        .subscribe((data: any)=>{
            if(data.isAuthenticated){
                this.router.navigate(['/blog']);
            }
            else{
                console.log('login failed');
            }
        });
    }
}
