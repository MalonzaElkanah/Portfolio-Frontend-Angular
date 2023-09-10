import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TokenStorageService } from '../../auth/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization'; // const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;

        // Get the auth token from the service.
        const token = this.token.getToken();
        if (token != null) {
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            });
            // Clone the request and set the new header in one step.
            // const authReq = req.clone({ setHeaders: { Authorization: authToken } })
        }
        // if token is not null, send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}
