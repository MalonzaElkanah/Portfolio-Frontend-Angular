import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { SeriesComponent } from './series/series.component';

import { blogResolver } from './blog.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'series/articles/:slug/:id', component: SeriesComponent },
  { path: 'category/articles/:slug/:id', component: CategoryComponent },
  { path: 'articles/:slug/:id', component: ArticleComponent, resolve: { article: blogResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
