import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: 'blog', component: HomeComponent },
  { path: 'blog/articles', component: ArticlesComponent },
  { path: 'blog/series/articles/:slug/:id', component: SeriesComponent },
  { path: 'blog/category/articles/:slug/:id', component: CategoryComponent },
  { path: 'blog/articles/:slug/:id', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
