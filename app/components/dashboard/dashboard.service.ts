import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DashboardCard } from '../dashboard-card/dashboard-card';


@Injectable()
export class DashboardService {

    private dashboardUrl = 'app/dashboard';
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http){}

    getNewsCard(): Promise<DashboardCard>{
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(response => response.json().data as DashboardCard)
            .catch();
    }

    getBlogCard(): Promise<DashboardCard>{
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(response => response.json().data as DashboardCard)
            .catch();
    }

    getEmpSchedCard(): Promise<DashboardCard>{
        return this.http.get(this.dashboardUrl)
            .toPromise()
            .then(response => response.json().data as DashboardCard)
            .catch();
    } 

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
} 