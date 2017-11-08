import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';


export function authMockBackend(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
    let obs;
    if(url.endsWith('api/authenticate') && method === 'POST' ){
        obs = new Observable(resp => {
            resp.next(new HttpResponse({
                status: 200,
                body: {
                    token: 'fake-jwt-token',
                    isAuthenticated: true,
                    username: 'krispaks'
                }
            }));
    
            resp.complete();
        }).delay(3000);
    }

    return obs;
}