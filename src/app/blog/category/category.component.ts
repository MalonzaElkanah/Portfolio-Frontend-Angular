import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleList, Article, Category } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {
  articles: [Article] | undefined;
  category: Category | undefined;
  title = "";

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeId = this.route.snapshot.params['id'];
    const id = parseInt(atob(routeId), 10);

    this.blogService.getAllCategoryArticles(id).subscribe((articles: [Article]) => {
      this.articles = articles;
    });

    this.blogService.getCategory(id).subscribe((category: Category) => {
      this.category = category;
      this.title = category.name;
    });

  }

  getCategoryArticles(articles: [Article]): void {
    this.articles = articles;
  }

  newCategory(category: Category): void {
    this.category = category;
  }

  newTitle(title: string) {
    this.title = title;
  }

}
