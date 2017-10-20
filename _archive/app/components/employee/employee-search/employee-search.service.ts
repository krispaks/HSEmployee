import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../employee';
import { AuthService } from '../../core/auth/auth.service';

@Injectable()
export class EmployeeSearchService {
    private headers: Headers;
    constructor(private http: Http, private authService: AuthService) {}

    search(term: string): Observable<Employee[]> {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authService.getToken()
        });

        return this.http
                    .get(`/api/employees/?name=${term}`, { headers: this.headers})
                    .map((r: Response) => {
                        return r.json()
                    })
    }
}