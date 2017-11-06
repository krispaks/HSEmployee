import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
//import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private isLoggedIn: boolean = false;
    constructor(private storageService: StorageService,
                private httpClient: HttpClient){}

    async login(username: string, password: string): Promise<boolean> {

        /*return this.http.post('/api/authenticate', JSON.stringify({
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
        });*/

        let isAuthenticated: boolean = false;

        await this.httpClient.post('/api/authenticate', JSON.stringify({
            username: username,
            password: password
        })).subscribe((data: any) => {
            if(data.isAuthenticated){
                isAuthenticated = data.isAuthenticated;
                this.storageService.setItem('user', JSON.stringify({
                    username: data.username,
                    token: data.token
                }));
            }
        }, (error: any) => {
            //logger service here
        });

        return isAuthenticated;
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