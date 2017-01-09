import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    private isLoggedIn: boolean = false;
    constructor(private storageService: StorageService,
                private http: Http){}

    login(username: string, password: string): Observable<boolean> {

        return this.http.post('/api/authenticate', JSON.stringify({
            username: username,
            password: password
        })).map((response: Response) => {
            this.isLoggedIn = true;


            this.storageService.setItem('username', 'krispaks');

            return this.isLoggedIn;
        });
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