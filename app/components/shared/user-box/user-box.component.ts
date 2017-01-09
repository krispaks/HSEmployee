import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../core/user/user';
import { AuthService } from '../../core/auth/auth.service';
import { StorageService } from '../../core/storage/storage.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-user-box',
    styleUrls: ['user-box.component.css'],
    templateUrl: './user-box.component.html'
})

export class UserBoxComponent implements OnInit {
    user: User;
    isLoggedIn: boolean = false;

    constructor(private auth: AuthService
    , private router: Router
    , private storageService: StorageService){}

    ngOnInit(): void {
        this.isLoggedIn = this.auth.IsAuthenticated();
        if(this.storageService.getItem('username'))
        {
            this.user = new User();
            this.user.username = this.storageService.getItem('username');
        }
    }

    logout(): void {
        this.auth.logout();
        this.router.navigate(['/login']);
    }
}