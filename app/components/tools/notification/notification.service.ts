import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import {Registration} from './notification.models';

import 'rxjs/add/operator/toPromise';
import { Observable } from  'rxjs/Observable';

@Injectable()
export class NotificationService{
    private blogUrl = 'http://kpaca-12v/SupplyProREST/api/SPAngular2/';
    private headers: Headers;

    constructor(private http: Http){}

    getRegistrations(): Observable<Registration[]>{

        this.headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http.get(this.blogUrl + "GetNotificationRegistrations", { headers: this.headers})
                .map((response: Response) => response.json())
                .map(payload => {
                    return new Array<Registration>();
                });
    }

    /*deleteRegistration(id: string): Promise<boolean>{
        return this.http.post()
    }*/

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}