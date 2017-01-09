import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {
    private isLoggedIn: boolean = false;
    constructor(private storageService: StorageService){}

    login(): boolean {
        this.isLoggedIn = true;

        this.storageService.setItem('username', 'krispaks');

        return this.isLoggedIn;
    }

    logout(): boolean {
        this.isLoggedIn = false;
        this.storageService.removeItem('username');
        return true;
    }

    IsAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}