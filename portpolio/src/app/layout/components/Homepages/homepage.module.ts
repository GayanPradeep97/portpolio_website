import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from '../../pages/dashboard/header/header.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomepageRoutingModule, SharedModule],
})
export class HomepageModule {}
