import { Injectable } from '@angular/core';
import {  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormspreeService {
  private email: string;
  private firstName: string;
  private lastName: string;
  private message: string;

  constructor() { }

  setEmail = (email): void => { this.email = email };
  getEmail = (): string => { return this.email };

  setFirstName = (firstName): void => { this.firstName = firstName };
  getFirstName = (): string => { return this.firstName };

  setLastName = (lastName): void => { this.lastName = lastName };
  getLastName = (): string => { return this.lastName };

  setMessage = (message): void => { this.message = message };
  getMessage = (): string => { return this.message };
}
