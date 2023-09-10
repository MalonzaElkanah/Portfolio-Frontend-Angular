import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, interval, of } from 'rxjs';
import {
   tap, takeWhile
 } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navBorder: string = ' ';
  timer: any = undefined;

  @HostListener('window:scroll', ['$event']) scrollHandler(event: any) {
    //console.log("scroll event....");
    this.navBorder = 'border-bottom';

    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.navBorder = ' ';
    }, 500);
  }

}
