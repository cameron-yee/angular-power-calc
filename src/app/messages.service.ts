import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private values: Object = {};
  private icc_messages: string[] = [];
  private r2_messages: string[] = []
  private clicked: boolean = false;

  pushValue(key: string, value: string): void {
    this.values[key] = value;
  }

  setValues(values: Object): void {
    this.values = values;
  }

  getValues(): Object {
    return this.values;
  }

  setIccMessages(icc_messages: string[]) {
    this.icc_messages = icc_messages;
  }

  getIccMessages(): string[] {
    return this.icc_messages;
  }

  setr2Messages(r2_messages: string[]): void {
    this.r2_messages = r2_messages;
  }

  getr2Messages(): string[] {
    return this.r2_messages;
  }

  setClicked(): void {
    this.clicked = true;
  }

  getClicked(): boolean {
    return this.clicked;
  }
}
