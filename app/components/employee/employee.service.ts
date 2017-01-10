import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, Response } from '@angular/http';
import { AuthService } from '../core/auth/auth.service';
import { Observable } from  'rxjs';

import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

    private employeeUrl = '/api/employees';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http, private authService: AuthService){}

    getEmployees(): Observable<Employee[]> {

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authService.getToken()
        });

        return this.http.get(this.employeeUrl
            , { headers: this.headers})
            .map((response: Response) => {
                if(response.status === 200)
                {
                    return response.json();
                }
                else
                {
                    
                }
            });
    }

    getEmployee(id: number): Promise<Employee>{
        //return this.getEmployees()
        //    .then(employees => employees.find(employee => employee.id === id))

        return new Promise<Employee>(() => {});
    }

    update(employee: Employee): Promise<Employee> {
        const url = `${this.employeeUrl}/${employee.id}`;
        return this.http
            .put(url, JSON.stringify(employee), {headers: this.headers})
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    create(name: string): Promise<Employee>{
        return this.http
            .post(this.employeeUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        const url = `${this.employeeUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}