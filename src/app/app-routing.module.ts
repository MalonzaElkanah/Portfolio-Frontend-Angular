import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    data: { name: 'Home' },
    loadChildren: () =>
      import(`./home/home.module`).then((m) => m.HomeModule)
  },
  {
    path: 'projects',
    data: { name: 'Project' },
    loadChildren: () =>
      import(`./project/project.module`).then((m) => m.ProjectModule)
  },
  {
    path: 'blog',
    data: { name: 'blog' },
    loadChildren: () =>
      import(`./blog/blog.module`).then((m) => m.BlogModule)
  }
  // { path: "", redirectTo: '/todos', pathMatch: 'full' },
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
