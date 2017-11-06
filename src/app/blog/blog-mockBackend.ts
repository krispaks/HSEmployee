import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


export function blogMockBackend(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
    if(url.endsWith('api/blog') && method === 'GET' ){
       return new Observable(resp => {
           resp.next(new HttpResponse({
               status: 200,
               body: {
                   'helloWorld': 'hello'
               }
           }));

           resp.complete();
       }); 
    }
}