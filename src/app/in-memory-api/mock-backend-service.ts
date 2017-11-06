import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { blogMockBackend } from '../blog/blog-mockBackend';
import { authMockBackend } from '../core/auth/auth-mockBackend';

@Injectable()
export class MockBackendService implements HttpInterceptor {

    constructor(){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url: string = request.url;
        let method: string = request.method;

        return blogMockBackend(url, method, request) 
        || authMockBackend(url, method, request)
        || next.handle(request);
    }
}