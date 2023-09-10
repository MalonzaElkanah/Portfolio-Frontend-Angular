import { Component, inject } from '@angular/core';

import { Article, ArticleList } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featured_articles: Article[] | undefined;
  featured_article: Article | undefined;

  article_list: ArticleList | undefined;
  title = "Articles";

  blogService: BlogService = inject(BlogService);

  constructor() {

    /*this.blogService.getFeaturedArticles().subscribe((articles: Article[]) => {
      this.featured_articles = articles;
      if (this.featured_articles) {
        this.featured_article = this.featured_articles[0];
      };
    });*/

    this.blogService.getAllArticles().subscribe((articles: ArticleList) => {
      this.article_list = articles;
    });
  }

  newArticles(articles: ArticleList){
    this.article_list = articles;
  }
  newTitle(title: string) {
    this.title = title;
  }

}
