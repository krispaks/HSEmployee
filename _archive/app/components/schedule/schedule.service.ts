import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { ScheduleEntry } from './schedule.types'
import { AuthService } from '../core/auth/auth.service';

@Injectable()
export class ScheduleService {
    private headers: Headers;
    private scheduleUrl: string = "/api/schedule";
    constructor(private http: Http, private authService: AuthService){}

    getDaySchedule(date: Date): Promise<ScheduleEntry[]>{

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authService.getToken()
        });

        let dateUrl = date.getDate() + '' + date.getMonth() + '' + date.getFullYear();

        return this.http.get(this.scheduleUrl + '/' + dateUrl, { headers: this.headers})
            .toPromise()
            .then((r: Response) => { 
                return r.json(); 
            })
            .catch(this.handleError);
    }

    updateDaySchedule(entry: ScheduleEntry): Promise<boolean>{
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authService.getToken()
        });

        return this.http.post(this.scheduleUrl + '/update/' + entry.id, entry,  { headers: this.headers })
            .toPromise()
            .then((r: Response) => { 
                return r.json(); 
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}