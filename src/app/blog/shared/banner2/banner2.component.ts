import { Component, Input } from '@angular/core';

import { Article } from '../../blog';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component {
  @Input() article : Article | undefined;

}
