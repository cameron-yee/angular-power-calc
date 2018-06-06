import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fbind } from 'q';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
// import { emailMatch } from './../email-match';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('success') success: any;

  contactForm : FormGroup;

  constructor(fb: FormBuilder) {

    this.contactForm = fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      email_group: fb.group({
        'email' : [null, [Validators.required, Validators.email]],
        'verifyEmail' : [null, [Validators.required, Validators.email]],
      }, {validator: this.emailMatch}),
      'message' : [null, Validators.required]
    });
  }

  ngAfterViewInit() {}

  showSuccessMessage = () => {
    window.scroll(0, 180);
    this.success.nativeElement.classList.remove('hidden');
    this.success.nativeElement.classList.add('show');
  }

  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
    console.log(form.email_group['email']);
    this.showSuccessMessage();
  }

  emailMatch(control: AbstractControl): {[key: string]: boolean} {
    const email = control.get('email');
    const confirm_email = control.get('verifyEmail');
    console.log(email, confirm_email);

    if(email.value === confirm_email.value) {
      return null;
    }
    // this.verify_email.nativeElement.classList += 'ng-invalid';
    confirm_email.setErrors({'invalid': true});
    return {invalid: true};
  }


successMessage = "Your message has been received!";
// errorFirstName = response.errors.firstName;
// errorLastName = response.errors.lastName;
// errorEmail = response.errors.email;
// errorValidateEmail = response.errors.validateEmail;
// errorMessage = response.errors.message;

}
