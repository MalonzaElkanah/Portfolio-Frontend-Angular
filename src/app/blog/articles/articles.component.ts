import { Component, OnInit } from '@angular/core';

import { ArticleList } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles: ArticleList | undefined;
  title = "Articles";
  search_keyword = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(){
    this.blogService.getAllArticles().subscribe((articles: ArticleList) => {
      this.articles = articles;
    });

  }

  pageArticles(page: string) {
    this.blogService.getAllArticles(
      this.search_keyword,
      page
    ).subscribe((articles: ArticleList) => {
      this.articles = articles;
    });
  }

  newArticles(articles: ArticleList){
    this.articles = articles;
  }

  newSearchKeyword(keyword: string) {
    this.search_keyword = keyword;
  }

  newTitle(title: string) {
    this.title = title;
  }

}
