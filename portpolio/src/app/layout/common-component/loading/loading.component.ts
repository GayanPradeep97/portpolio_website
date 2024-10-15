import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../../_services/common.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass'],
})
export class LoadingComponent {
  loading = false;
  private loadingSubscription!: Subscription;

  constructor(private commons: CommonService) {}

  ngOnInit() {
    this.loadingSubscription = this.commons
      .getLoadingStatus()
      .subscribe((loading) => {
        setTimeout(() => {
          this.loading = loading.status;
          console.log('loading working', loading);
        }, 0);
      });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.loadingSubscription.unsubscribe();
  }
}
