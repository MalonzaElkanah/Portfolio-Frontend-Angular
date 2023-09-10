import { Component, EventEmitter, Output, Input } from '@angular/core';

import { CategoryList, SeriesList } from '../../blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  series: SeriesList | undefined;
  category: CategoryList | undefined;

  @Output() newArticlesEvent = new EventEmitter<number>();
  @Output() newCategoryEvent = new EventEmitter<string>();

  constructor(private blogService: BlogService){
    this.blogService.getAllCategories().subscribe((category: CategoryList) => {
      this.category = category;
    });
    this.blogService.getAllSeries().subscribe((series: SeriesList) => {
      this.series = series;
    });
  }

  getCategoryArticles(id: number, category: string): void {
    this.newArticlesEvent.emit(id);
    this.newCategoryEvent.emit(category);
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
