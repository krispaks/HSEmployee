import { Injectable } from '@angular/core';
//import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from '../core/auth/auth.service';

import { Observable } from 'rxjs/Observable';

import { Blog } from './blog.types';

@Injectable()
export class BlogService{
    private blogUrl = '/api/blogs';
    private headers: HttpHeaders;

    constructor(private httpClient: HttpClient, private authService: AuthService){}

    getBlogs(): Observable<Object>{

        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authService.getToken()
        });

        return this.httpClient.get(this.blogUrl, { headers: this.headers});
    }

    getBlog(id: number): Observable<Object>{
        return this.getBlogs();
    }
}