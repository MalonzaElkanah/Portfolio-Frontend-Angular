import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgApexchartsModule } from "ng-apexcharts";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServiceComponent } from './service/service.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ServiceComponent,
    SkillComponent,
    ExperienceComponent,
    ProjectComponent,
    PricingComponent,
    ContactComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ]
})
export class HomeModule { }
