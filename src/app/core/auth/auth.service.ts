import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

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

            let token = response.json() && response.json().token;
            if(response.status === 200 && token)
            {
                this.storageService.setItem('user', JSON.stringify({
                    username: username,
                    token: token
                }));

                return true;
            }
            else
            {
                return false;
            }
        });
    }

    logout(): boolean {
        this.storageService.removeItem('user');
        return true;
    }

    IsAuthenticated(): boolean {
        let user = this.storageService.getItem('user');
        return user ? true : false;
    }

    getToken(): string {
        let user = this.storageService.getItem('user');
        return user && JSON.parse(user).token;
    }
}