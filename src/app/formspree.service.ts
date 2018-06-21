import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {
  constructor(private http: HttpClient) { }

  private status: boolean;

  private email: string;
  private firstName: string;
  private lastName: string;
  private message: string;
  // private message: string = `Project: POWER ANALYSIS PARAMETERS\n\nMESSAGE FROM: ${ this.lastName }, ${ this.firstName }\n\nREPLY TO: ${ this.email }\n\nMESSAGE:\n\n${ this.message }`;

  //NEED GOLD ACCOUNT TO AJAX POST
  private url: string = 'https://formspree.io/mdzzqblm';

  setEmail = (email) => { this.email = email };
  setFirstName = (firstName) => { this.firstName = firstName };
  setLastName = (lastName) => { this.lastName = lastName };
  setMessage = (message) => { this.message = message };
  getStatus = () => { return this.status };

  postData = () => {
    // let data =  {
    //   name: this.lastName + ', ' + this.firstName,
    //   email: this.email,
    //   message: this.message
    // }

    let data = `name=${this.lastName + ', ' + this.firstName}&email=${this.email}&message=${this.message}`;

    this.http.post(
      this.url,
      data,
      {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})}
    )
      .subscribe(res => {
        console.log(res);
        this.status = true;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
