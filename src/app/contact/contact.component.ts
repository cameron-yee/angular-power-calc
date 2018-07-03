import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormspreeService } from '../formspree.service';
import {  } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('success') success: any;
  @ViewChild('fail') fail: any;
  @ViewChild('form') form: any;

  contactForm : FormGroup;

  constructor(private formspree: FormspreeService, fb: FormBuilder, private http: HttpClient) {

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

  showSuccessMessage = (): void => {
    window.scroll(0, 180);
    this.success.nativeElement.classList.remove('hidden');
    this.success.nativeElement.classList.add('show');
  }

  showFailMessage = (): void => {
    window.scroll(0, 180);
    this.fail.nativeElement.classList.remove('hidden');
    this.fail.nativeElement.classList.add('show');
  }

  getData = (): string => {
    let first_name: string = this.formspree.getFirstName();
    let last_name: string = this.formspree.getLastName();
    let email: string = this.formspree.getEmail();
    let message: string = this.formspree.getMessage();

    let data: string = `name=${last_name}, ${first_name}&email=${email}&message=${message}`;
    return data;
  }

  postData = (form: any): void => {
    let url: string = 'https://formspree.io/mdzzqblm'
    let data: string = this.getData();

    this.http.post(
      url,
      data,
      {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})}
    )
      .subscribe(res => {
        console.log(res);
        form.reset();
        this.showSuccessMessage();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.showFailMessage();
      },
    );
  }

  submitForm(form_values: any, form: FormGroup): void {
    let form_data_promise = new Promise((resolve) => {
      this.formspree.setEmail(form_values.email_group['email']);
      this.formspree.setFirstName(form_values['firstName']);
      this.formspree.setLastName(form_values['lastName']);
      this.formspree.setMessage(form_values['message']);
      resolve();
    })
    form_data_promise.then((): void => {
      this.postData(form);
    });
  }
    
  emailMatch(control: AbstractControl): {[key: string]: boolean} {
    const email = control.get('email');
    const confirm_email = control.get('verifyEmail');

    if(email.value === confirm_email.value) {
      return null;
    }

    confirm_email.setErrors({'invalid': true});
    return {invalid: true};
  }

  successMessage = "Your message has been received!";
  failMessage = "Message did not send.  An error in the server occurred.  Try again later.";
}
