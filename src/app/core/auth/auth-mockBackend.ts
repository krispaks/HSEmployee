import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export function authMockBackend(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
    if(url.endsWith('api/authenticate') && method === 'POST' ){
       return new Observable(resp => {
           resp.next(new HttpResponse({
               status: 200,
               body: {
                   token: 'fake-jwt-token',
                   isAuthenticated: true,
                   username: 'krispaks'
               }
           }));

           resp.complete();
       }); 
    }
}