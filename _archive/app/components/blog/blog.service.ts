import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthService } from '../core/auth/auth.service';

import 'rxjs/add/operator/toPromise';

import { Blog } from './blog';

@Injectable()
export class BlogService{
    private blogUrl = '/api/blogs';
    private headers: Headers;

    constructor(private http: Http, private authService: AuthService){}

    getBlogs(): Promise<Blog[]>{

        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authService.getToken()
        });

        return this.http.get(this.blogUrl, { headers: this.headers})
            .toPromise()
            .then((r: Response) => { 
                return r.json(); 
            })
            .catch(this.handleError);
    }

    getBlog(id: number): Promise<Blog>{
        return this.getBlogs()
            .then((blogs) => { 
                    var bg = blogs.find(blog => blog.id === id);
                    return bg;
                });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}