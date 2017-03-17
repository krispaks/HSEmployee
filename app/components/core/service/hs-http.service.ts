import { Http, ConnectionBackend, BaseRequestOptions, RequestOptionsArgs, Response, Request, RequestMethod, RequestOptions} from '@angular/http';
import {} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

function httpRequest(backend: ConnectionBackend, request: Request): Observable<Response> {
  return backend.createConnection(request).response;
}

function mergeOptions(
    defaultOpts: BaseRequestOptions, providedOpts: RequestOptionsArgs, method: RequestMethod,
    url: string): RequestOptions {
  const newOptions = defaultOpts;
  if (providedOpts) {
    // Hack so Dart can used named parameters
    return newOptions.merge(new RequestOptions({
      method: providedOpts.method || method,
      url: providedOpts.url || url,
      search: providedOpts.search,
      //params: providedOpts.params,
      headers: providedOpts.headers,
      body: providedOpts.body,
      withCredentials: providedOpts.withCredentials,
      responseType: providedOpts.responseType
    }));
  }

  return newOptions.merge(new RequestOptions({method, url}));
}

export class HSHttpService extends Http {

    _mockBackend: MockBackend;
    constructor(backend: ConnectionBackend, mockBackend: MockBackend, requestOptions: BaseRequestOptions){
        super(backend, requestOptions);
        this._mockBackend = mockBackend;

        this.get    
    }

    request(url: string | Request, options?: RequestOptionsArgs, isMock?: boolean): Observable<Response>{
        let responseObservable: any;
        if (typeof url === 'string') {
        responseObservable = httpRequest(
            this._backend,
            new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, <string>url)));
        } else if (url instanceof Request) {
        responseObservable = httpRequest(this._backend, url);
        } else {
        throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    }
    
    get(url: string, options?: RequestOptionsArgs) : Observable<Response> {
        this._defaultOptions.headers.keys()
        return new Observable<Response>();
    }
}