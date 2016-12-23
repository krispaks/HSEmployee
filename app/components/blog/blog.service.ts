import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Blog } from './blog';

@Injectable()
export class BlogService{
    private blogUrl = 'app/blogs';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http){}

    getBlogs(): Promise<Blog[]>{
        return this.http.get(this.blogUrl)
            .toPromise()
            .then(response => response.json().data as Blog[])
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