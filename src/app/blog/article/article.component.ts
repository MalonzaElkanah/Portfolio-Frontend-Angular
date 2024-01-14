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
  article!: Article;
  series_articles: Article[] | undefined;
  articles: Article[] | undefined;

  constructor(
    private blogService: BlogService,
    private sanitized: DomSanitizer,
    private route: ActivatedRoute
  ) {

    this.route.data.subscribe((data) => {
      this.article = data["article"];
      if (this.article.content){
        this.article.content = this.sanitized.bypassSecurityTrustHtml(this.article.content);
      }
    });

  }

  ngOnInit(): void { }
}
