import { Component, Input } from '@angular/core';

import { Article } from '../../blog';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent {
  @Input() article : Article | undefined;

  constructor(private blogService: BlogService) { }  

  slugify(str: string): string {
    return this.blogService.slugify(str);
  }
  binarify(int: number): string {
    return btoa(int.toString())
  }

}
