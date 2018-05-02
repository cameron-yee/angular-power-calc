import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

successMessage = "Your message has been received!";
// errorFirstName = response.errors.firstName;
// errorLastName = response.errors.lastName;
// errorEmail = response.errors.email;
// errorValidateEmail = response.errors.validateEmail;
// errorMessage = response.errors.message;

}
