import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    component: ContactMeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
