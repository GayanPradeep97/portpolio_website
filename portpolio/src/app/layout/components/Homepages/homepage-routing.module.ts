import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeRouterComponent } from './home-router/home-router.component';
import { SkillsAndExperinceComponent } from './skills-and-experince/skills-and-experince.component';

const routes: Routes = [
  {
    path: '',
    component: HomeRouterComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'skills-and-experince',
    component: SkillsAndExperinceComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
