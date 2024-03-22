import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from '../../pages/dashboard/header/header.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeRouterComponent } from './home-router/home-router.component';
import { SkillsAndExperinceComponent } from './skills-and-experince/skills-and-experince.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    HomeRouterComponent,
    SkillsAndExperinceComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, HomepageRoutingModule, SharedModule],
})
export class HomepageModule {}
