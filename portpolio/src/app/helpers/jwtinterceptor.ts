import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  throwError,
} from 'rxjs';
import { CommonService } from '../_services/common.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  request = 0;

  constructor(private commonService: CommonService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.commonService.showLoading();
    this.request++;
    throw new Error('Method not implemented.');
  }

  stopLoader() {
    this.request--;
    if (this.request <= 0) {
      this.commonService.hideLoading();
    }
  }
}
