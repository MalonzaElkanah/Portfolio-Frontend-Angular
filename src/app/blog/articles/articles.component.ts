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

  constructor(private blogService: BlogService) { }

  ngOnInit(){
    this.blogService.getAllArticles().subscribe((articles: ArticleList) => {
      this.articles = articles;
    });

  }

  newArticles(articles: ArticleList){
    this.articles = articles;
  }

  newTitle(title: string) {
    this.title = title;
  }

}
