import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  private icc_state: string;
  private r2_state: string;
  private icc_grades: string[];
  private r2_grades: string[];
  private show_domain: boolean = false;

  setIccState(state: string) {
    this.icc_state = state;
  }

  getIccState(): string {
    return this.icc_state;
  }

  setIccGrades(grades: string[]): void {
    this.icc_grades = grades;
  }

  getIccGrades(): string[] {
    return this.icc_grades;
  }

  setr2State(state: string): void {
    this.r2_state = state;
  }

  getr2State(): string {
    return this.r2_state;
  }

  setr2Grades(grades: string[]): void {
    this.r2_grades = grades;
  }

  getr2Grades(): string[] {
    return this.r2_grades;
  }

  hideDomain(show_domain: boolean): void {
    this.show_domain = show_domain;
  }

  gethideDomain(): boolean {
    return this.show_domain;
  }
}
