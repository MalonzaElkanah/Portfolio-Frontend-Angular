import { Component, Input } from '@angular/core';

import { Service } from '../home';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() services: [Service] | undefined;

  private colorClass = [
    'text-secondary',
    'text-success',
    'text-primary','text-danger'
  ];

  chooseColorClass(id: number): string {
    return this.colorClass[id]
  } 

}
