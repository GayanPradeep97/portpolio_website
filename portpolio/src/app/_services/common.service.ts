import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private loading = new Subject();
  constructor() {}

  public getLoadingStatus(): Observable<any> {
    // console.log('getLoadingStatus Observable >>>>>>> ');
    return this.loading.asObservable();
  }

  showLoading() {
    // console.log('showLoading method >>>>>>> ');
    this.loading.next({ status: true });
  }

  hideLoading() {
    // console.log('hideLoading method >>>>>>> ');
    this.loading.next({ status: false });
  }
}
