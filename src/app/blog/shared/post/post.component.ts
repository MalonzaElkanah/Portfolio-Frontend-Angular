import { Component, Input } from '@angular/core';

import { Article } from '../../blog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() article: Article | undefined;
}
