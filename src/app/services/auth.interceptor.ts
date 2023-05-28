import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { StudentRegService } from './student-reg.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private studentRegService: StudentRegService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
      // this.router.navigate(['']);
      return next.handle(req);
    }

    const _request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
    });

    return next.handle(_request);
  }
}
