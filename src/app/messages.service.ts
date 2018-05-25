import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MessagesService {
  private values: Object = {};
  private icc_messages: string[] = [];
  private r2_messages: string[] = []
  private clicked: boolean = false;
  // public clicked$: Observable<boolean> = Observable.of(true);

  pushValue(key, value) {
    this.values[key] = value;
  }

  setValues(values) {
    this.values = values;
  }

  getValues() {
    return this.values;
  }

  setIccMessages(icc_messages) {
    this.icc_messages = icc_messages;
  }

  getIccMessages() {
    return this.icc_messages;
  }

  setr2Messages(r2_messages) {
    this.r2_messages = r2_messages;
  }

  getr2Messages() {
    return this.r2_messages;
  }

  setClicked() {
    this.clicked = true;
  }

  getClicked() {
    return this.clicked;
  }

  // getIccMessageValues() {
  //   return this.icc_message_values;
  // }

  // setR2MessageValues(r2_message_values) {
  //   this.r2_message_values = r2_message_values;
  // }

  // getR2MessageValues() {
  //   return this.r2_message_values;
  // }

  // setMessages(messages) {
  //   this.messages = messages;    
  // }

  // getMessages() {
  //   return this.messages;
  // }
}
