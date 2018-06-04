import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fbind } from 'q';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm : FormGroup;

  constructor(fb: FormBuilder) { 

    this.contactForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, Validators.required, Validators.email],
      'verifyEmail' : [null, Validators.required, Validators.email],
      'message' : [null, Validators.required]
    });
  }

  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

successMessage = "Your message has been received!";
// errorFirstName = response.errors.firstName;
// errorLastName = response.errors.lastName;
// errorEmail = response.errors.email;
// errorValidateEmail = response.errors.validateEmail;
// errorMessage = response.errors.message;

}
