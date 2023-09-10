import { Component, Input } from '@angular/core';

import { Work, Education } from '../home';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
   @Input() education_profile: [Education] | undefined;
   @Input() work_profile: [Work] | undefined;

}
