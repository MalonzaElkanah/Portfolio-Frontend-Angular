import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;
  series_articles: Article[] | undefined;
  articles: Article[] | undefined;

  constructor(
    private blogService: BlogService,
    private sanitized: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeId = this.route.snapshot.params['id'];
    const articleId = parseInt(atob(routeId), 10);

    if (articleId){
      this.blogService.getArticle(articleId).subscribe((article: Article) => {
        this.article = article;
        if (this.article?.content){
          this.article.content = this.sanitized.bypassSecurityTrustHtml(this.article.content);
        }
      });
    } else {
      alert("Article Not Found.");
    }
  }
}
