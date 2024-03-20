import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzLayoutModule,
  ],
})
export class SharedModule {}
