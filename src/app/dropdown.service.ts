import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  private icc_state: string;
  private r2_state: string;
  private icc_grades: string[] = ['4','5','6','7','8','9','10','11'];
  private r2_grades: string[] = ['4','5','6','7','8','9','10','11'];

  setIccState(state: string) {
    this.icc_state = state;
  }

  getIccState() {
    return this.icc_state;
  }

  setIccGrades(grades: string[]) {
    this.icc_grades = grades;
  }

  getIccGrades() {
    return this.icc_grades;
  }

  setr2State(state: string) {
    this.r2_state = state;
  }

  getr2State() {
    return this.r2_state;
  }

  setr2Grades(grades: string[]) {
    this.r2_grades = grades;
  }

  getr2Grades() {
    return this.r2_grades;
  }
}
