import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private values: any[] = [];
  private messages: string[] = [];

  pushValue(key, value) {
    console.log(this.values);
    console.log(key);
    console.log(value);
    this.values.push({key, value});
    console.log(this.values);
  }

  setValues(values) {
    this.values = values;
  }

  getValues() {
    return this.values;
  }

  setMessages(messages) {
    this.messages = messages;    
  }

  getMessages() {
    return this.messages;
  }
}
