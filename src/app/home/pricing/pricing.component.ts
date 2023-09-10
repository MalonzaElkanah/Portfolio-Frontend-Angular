import { Component, Input } from '@angular/core';

import { Pricing } from '../home';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  @Input() pricing : [Pricing] | undefined;

}
