import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BlogComment } from './blog-comment';

@Injectable()
export class BlogCommentService {
    private blogCommentUrl = 'app/blogComments';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http){}

    getBlogComments(): Promise<BlogComment[]>{
        return this.http.get(this.blogCommentUrl)
            .toPromise()
            .then(response => response.json().data as BlogComment[])
            .catch(this.handleError)
    }

    getBlogCommentsByBlogId(blogId: number): Promise<BlogComment[]> {
        return this.getBlogComments()
            .then(comments => comments.filter(comment => comment.blogId === blogId));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}