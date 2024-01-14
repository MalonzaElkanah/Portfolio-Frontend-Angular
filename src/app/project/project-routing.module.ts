import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TechComponent } from './tech/tech.component';

import { projectResolver } from './project.resolver';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'keywords/:keyword', component: TechComponent },
  { path: 'view/:slug/:id', component: DetailComponent, resolve: { project: projectResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
