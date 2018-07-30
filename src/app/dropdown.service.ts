import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  private grades: string[];
  private state: string;
  private show_domain: boolean = false;

  setState(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  setGrades(grades: string[]): void {
    this.grades = grades;
  }

  getGrades(): string[] {
    return this.grades;
  }

  hideDomain(show_domain: boolean): void {
    this.show_domain = show_domain;
  }

  gethideDomain(): boolean {
    return this.show_domain;
  }
}
