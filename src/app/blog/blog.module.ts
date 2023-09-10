import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SeriesComponent } from './series/series.component';
import { SharedModule } from './shared/shared.module';
import { ContentComponent } from './shared/content/content.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { BannerComponent } from './shared/banner/banner.component';
import { Banner2Component } from './shared/banner2/banner2.component';
import { VerticalCardComponent } from './shared/vertical-card/vertical-card.component';
import { HorizontalCardComponent } from './shared/horizontal-card/horizontal-card.component';
import { SearchComponent } from './shared/search/search.component';
import { PostComponent } from './shared/post/post.component';
import { CommentsComponent } from './shared/comments/comments.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    HomeComponent,
    CategoryComponent,
    SeriesComponent,
    ContentComponent,
    ProfileComponent,
    BannerComponent,
    Banner2Component,
    VerticalCardComponent,
    HorizontalCardComponent,
    SearchComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
