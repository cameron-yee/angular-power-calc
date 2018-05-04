import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private values: Object = {};
  private messages: string[] = [];
  private icc_message_values: string[] = [];
  private r2_message_values: string[] = [];

  pushValue(key, value) {
    this.values[key] = value;
  }

  setValues(values) {
    this.values = values;
  }

  getValues() {
    return this.values;
  }

  setIccMessageValues(icc_message_values) {
    this.icc_message_values = icc_message_values;
  }

  getIccMessageValues() {
    return this.icc_message_values;
  }

  setR2MessageValues(r2_message_values) {
    this.r2_message_values = r2_message_values;
  }

  getR2MessageValues() {
    return this.r2_message_values;
  }

  setMessages(messages) {
    this.messages = messages;    
  }

  getMessages() {
    return this.messages;
  }
}
