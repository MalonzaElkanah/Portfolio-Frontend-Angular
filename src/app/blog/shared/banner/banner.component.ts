import { Component, Input } from '@angular/core';

import { Article } from '../../blog';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() article : Article | undefined;

}
