import { Component, Input } from '@angular/core';


import { Profile } from '../home';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @Input() profile: Profile | undefined;

}
