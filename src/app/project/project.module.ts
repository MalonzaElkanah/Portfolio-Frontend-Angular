import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TechComponent } from './tech/tech.component';
import { CardComponent } from './shared/card/card.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { SideNav2Component } from './shared/side-nav2/side-nav2.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    TechComponent,
    CardComponent,
    ProfileComponent,
    SideNavComponent,
    SideNav2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
