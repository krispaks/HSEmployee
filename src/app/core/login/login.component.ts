import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login('', '')
        .subscribe((isAuthenticated: boolean) => {
            if(isAuthenticated){
                this.router.navigate(['/employee']);
            }
            else{
                console.log('login failed');
            }
        });
  }
}
