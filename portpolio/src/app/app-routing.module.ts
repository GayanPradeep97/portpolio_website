import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';
import { HomepageComponent } from './layout/components/Homepages/homepage/homepage.component';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     // {
  //     //   path: '',
  //     //   pathMatch: 'full',
  //     //   redirectTo: '',
  //     // },
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./layout/components/Homepages/homepage.module').then(
  //           (m) => m.HomepageModule
  //         ),
  //     },
  //   ],
  // },

  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: '',
        loadChildren: () =>
          import('./layout/components/Homepages/homepage.module').then(
            (m) => m.HomepageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
