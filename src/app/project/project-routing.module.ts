import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  { path: 'projects', component: ListComponent },
  { path: 'projects/keywords/:keyword', component: TechComponent },
  { path: 'projects/:slug/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
