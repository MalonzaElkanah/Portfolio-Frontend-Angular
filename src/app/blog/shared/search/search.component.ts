import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {
  CategoryList,
  SeriesList,
  Article,
  ArticleList,
  Series,
  Category
} from '../../blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  series: SeriesList | undefined;
  category: CategoryList | undefined;

  pageTitle = '';
  @Input() keyword = 'All';
  @Input() categoryObject!: Category | undefined;
  @Input() seriesObject!: Series | undefined;

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  @Output() newArticleEvent = new EventEmitter<ArticleList>();
  @Output() newCategoryArticleEvent = new EventEmitter<[Article]>();
  @Output() newCategoryEvent = new EventEmitter<Category>();
  @Output() newSearchEvent = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private blogService: BlogService){
    this.blogService.getAllCategories().subscribe((category: CategoryList) => {
      this.category = category;
    });
    this.blogService.getAllSeries().subscribe((series: SeriesList) => {
      this.series = series;
    });
  }

  searchArticles(search: string): void {
    // let search = this.searchForm.value.search ?? '';
    this.searchEvent.emit(search);
    
    if (this.keyword === "All") {
      this.newArticleEvent.emit(undefined);
      this.newSearchEvent.emit(`Articles: '${search}' Search Results`);

      this.blogService.getAllArticles(search).subscribe((articles: ArticleList) => {
        this.newArticleEvent.emit(articles);
      });
    } else if (this.keyword === "series") {
      this.newSearchEvent.emit(`Series: '${search}' Search Results`);
      this.newCategoryArticleEvent.emit(undefined);

      if (this.seriesObject) {
        this.blogService.getAllSeriesArticles(
          this.seriesObject.id,
          search
        ).subscribe((articles: [Article]) => {
          this.newCategoryArticleEvent.emit(articles);
        });
      }
    } else {
      this.newSearchEvent.emit(`'${search}' Search Results`);
      this.newCategoryArticleEvent.emit(undefined);

      if (this.categoryObject) {
        this.newSearchEvent.emit(`${this.categoryObject.name}: '${search}' Search Results`);
        this.blogService.getAllCategoryArticles(
          this.categoryObject.id,
          search
        ).subscribe((articles: [Article]) => {
          this.newCategoryArticleEvent.emit(articles);
        });
      }
    } 

  }

  getCategoryArticles(id: number, category: string): void {
    this.blogService.getAllCategoryArticles(id).subscribe((articles: [Article]) => {
      this.newCategoryArticleEvent.emit(articles);
      
    });

    this.blogService.getCategory(id).subscribe((category: Category) => {
      this.newCategoryEvent.emit(category);
      this.newSearchEvent.emit(category.name);
    });
  }

  getSeriesArticles(id: number, series: string): void {
    // series = series.charAt(0).toUpperCase()+series.slice(1);
    // this.newCategoryEvent.emit(series)

    this.blogService.getAllSeriesArticles(id).subscribe((articles: [Article]) => {
      this.newCategoryArticleEvent.emit(articles);
    });

    this.blogService.getSeries(id).subscribe((series: Series) => {
      this.newCategoryEvent.emit(series);
      this.newSearchEvent.emit(series.name);
    });
  }
  
  slugify(str: string): string {
    return str.toLowerCase(
      ).trim(
      ).replace(
        /[^\w\s-]/g,
        ''
      ).replace(
        /[\s_-]+/g,
        '-'
      ).replace(
        /^-+|-+$/g,
        ''
      );
  }

  binarify(int: number): string {
    return btoa(int.toString())
  }
}
