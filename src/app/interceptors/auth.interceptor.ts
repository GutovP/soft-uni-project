import { Injectable, Provider } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError, EMPTY, Observable, tap, throwError } from "rxjs";

import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;
        if (req.url.startsWith('/api')) {
            request = req.clone({
                url: req.url.replace('/api', baseUrl)
            });
        }
        return next.handle(request).pipe(
            tap((req) => {
                if (req instanceof HttpResponse) { console.log(req.body); }
            }),
            catchError(err => {
                if (err.status === 0) {
                    console.log('UNKNOWN ERROR')
                    return EMPTY;
                }
                return throwError(() => err);
            })
        )
    }

}

export const authInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};