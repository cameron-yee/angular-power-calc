import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {

  private status: boolean;
  private email: string;
  private firstName: string;
  private lastName: string;
  private message: string;
  public status_observer: Observable<boolean>;
  // private message: string = `Project: POWER ANALYSIS PARAMETERS\n\nMESSAGE FROM: ${ this.lastName }, ${ this.firstName }\n\nREPLY TO: ${ this.email }\n\nMESSAGE:\n\n${ this.message }`;

  //NEED GOLD ACCOUNT TO AJAX POST
  private url: string = 'https://formspree.io/mdzzqblm';

  constructor(private http: HttpClient) { }

  setEmail = (email) => { this.email = email };
  setFirstName = (firstName) => { this.firstName = firstName };
  setLastName = (lastName) => { this.lastName = lastName };
  setMessage = (message) => { this.message = message };
  setStatus = (status) => { this.status = status };
  getStatus = () => { return this.status };

  postData = () => {
    let data = `name=${this.lastName}, ${this.firstName}&email=${this.email}&message=${this.message}`;

    let post = this.http.post(
      this.url,
      data,
      {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})}
    );
    
    this.status_observer = post.pipe(map(res => { 
      console.log(res)
      this.setStatus(true);
      return this.getStatus();
    })),
    (err: HttpErrorResponse) => {
      console.log(err);
      this.setStatus(false);
      return this.getStatus();
    };
      
      // .subscribe(res => {
      //   console.log(res);
      //   this.setStatus(true);
      // },
      // (err: HttpErrorResponse) => {
      //   console.log(err);
      //   this.setStatus(false);
      // },
    // );
    
  }
}
