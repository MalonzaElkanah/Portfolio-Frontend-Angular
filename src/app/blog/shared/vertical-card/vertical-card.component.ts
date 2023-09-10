import { Component, Input } from '@angular/core';

import { Article } from '../../blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent {
  @Input() article : Article | undefined;

  constructor(private blogService: BlogService) { }  

  slugify(str: string): string {
    return this.blogService.slugify(str);
  }
  binarify(int: number): string {
    return btoa(int.toString())
  }

}
