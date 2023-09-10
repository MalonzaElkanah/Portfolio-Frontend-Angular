import { Component, inject } from '@angular/core';


import { Profile } from '../home';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profile: Profile | undefined;
  homeService: HomeService = inject(HomeService);

  constructor() {
    this.homeService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }
}
