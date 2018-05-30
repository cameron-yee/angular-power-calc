import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { DropdownService } from '../dropdown.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [MessagesService, DropdownService]
})
export class CalculatorComponent implements AfterViewInit {

  constructor(private messagesService: MessagesService, private dropdownService: DropdownService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const icc_state: HTMLElement = document.getElementById('icc-state');
    const icc_grades: HTMLElement = document.getElementById('icc-grades');
    const r2_state: HTMLElement = document.getElementById('r2-state');
    const r2_grades: HTMLElement = document.getElementById('r2-grades');
    const default_grades: string[] = ['4','5','6','7','8','9','10','11'];

    let limitGrades: any = () => {
      let grades: string[] = this.dropdownService.getIccGrades();
      console.log(grades);
      // console.log(`grades: ${grades}`);
      for(let i = 0; i < 8; i++) {
        let current_id = document.getElementById(`icc-grades-${i}`);
        console.log(current_id);
        if(grades.includes(current_id.innerHTML)) {
          current_id.classList.remove('hidden');
        } else {
          current_id.classList.add('hidden');
        }
      }
    }

    let set_icc_grades = (selected_state) => {
      if(selected_state === 'Michigan') {
        this.dropdownService.setIccGrades(['4']);
      } else if(selected_state === 'Texas') {
        this.dropdownService.setIccGrades(['5']);
      } else if(selected_state === 'Wisconsin') {
        this.dropdownService.setIccGrades(['6']);
      } else {
        this.dropdownService.setIccGrades(default_grades);
      }

      limitGrades();
    }

    let set_icc_state = () => {
      const selected_state = icc_state.querySelector('span').innerHTML;
      console.log(selected_state);
      this.dropdownService.setIccState(selected_state);
      set_icc_grades(selected_state);
    }

    icc_grades.addEventListener('click', set_icc_state);
    // this.dropdown_component.nativeElement.addEventListener('click', limitGrades);
  }

}
