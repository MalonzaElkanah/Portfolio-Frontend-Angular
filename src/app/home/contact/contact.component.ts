import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Profile, Message } from '../home';
import { HomeService } from '../home.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() profile: Profile | undefined;

  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  contactForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private homeService: HomeService) { }

  submitContactForm(): void {
    let message: Message = {
      first_name: this.contactForm.value.first_name ?? '',
      last_name: this.contactForm.value.last_name ?? '',
      email: this.contactForm.value.email ?? '',
      message: this.contactForm.value.message ?? ''
    }

    this.homeService.createMessage(message).subscribe(
      data => {
        this.isSuccessful = true;
        this.isFailed = false;
        alert("Message Sent!");
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    )
  }


}
