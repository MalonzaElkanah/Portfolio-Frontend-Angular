import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleList, Article, Series } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit  {
  articles: [Article] | undefined;
  series: Series | undefined;
  title = "";

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeId = this.route.snapshot.params['id'];
    const seriesId = parseInt(atob(routeId), 10);

    this.blogService.getAllSeriesArticles(seriesId).subscribe((articles: [Article]) => {
      this.articles = articles;
    });

    this.blogService.getSeries(seriesId).subscribe((series: Series) => {
      this.series = series;
      this.title = `'${series.name}'`;
    });
  }

  getSeriesArticles(articles: [Article]): void {
    this.articles = articles;
  }

  newSeries(series: Series): void {
    this.series = series;
  }

  newTitle(title: string) {
    this.title = title;
  }

}
