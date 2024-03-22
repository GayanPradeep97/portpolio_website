import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HomeComponent } from '../home/home.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  isVisible = false;
  array = [
    'Restuarant App',
    'Hotel Inventory App',
    'Calculator Using ReactJs',
    'Portpoilo web Application',
  ];

  backgroundImageUrls = [
    ' linear-gradient(90deg, rgba(9,9,121,1) 4%, rgba(0,212,255,1) 99%, rgba(2,0,36,1) 100%)',
    'linear-gradient(90deg, rgba(76,231,68,1) 26%, rgba(0,212,255,1) 97%, rgba(14,14,17,1) 100%)',
    'linear-gradient(90deg, rgba(231,92,68,1) 26%, rgba(0,212,255,1) 97%, rgba(14,14,17,1) 100%)',
    'linear-gradient(90deg, rgba(68,107,231,1) 17%, rgba(169,235,245,1) 54%, rgba(78,255,0,1) 97%)',
  ];

  constructor(
    private modalService: NzModalService,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {}

  createBasicNotification(): void {
    this.notification
      .blank(
        'Notification Title',
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      )
      .onClick.subscribe(() => {
        console.log('notification clicked!');
      });
  }
}
