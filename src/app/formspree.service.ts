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
  private fn: string;
  private ln: string;
  private message: string = `Project: POW2\n\nMessage from ${ this.fn } ${ this.ln } \n\n ${ this.message }`;

  //NEED GOLD ACCOUNT TO AJAX POST
  private url: string = 'https://formspree.io/info@bscs.org';

  setEmail = (email) => { this.email = email };
  setfn = (fn) => { this.fn = fn };
  setln = (ln) => { this.ln = ln };
  setMessage = (message) => { this.message = message };
  getStatus = () => { return this.status };

  postData = () => {
    const data =  {
      email: this.email,
      message: this.message
    }

    this.http.post(this.url, data, {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})})
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
