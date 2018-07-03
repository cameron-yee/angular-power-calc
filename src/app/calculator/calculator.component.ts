import { Component, AfterViewInit, NgModule } from '@angular/core';
import { MessagesService } from '../messages.service';
import { DropdownService } from '../dropdown.service';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { IFrameResizeComponent } from '../i-frame-resize/i-frame-resize.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [MessagesService, DropdownService]
})

@NgModule({
  imports: [
    SubmitButtonComponent,
    DropdownComponent,
    IFrameResizeComponent,
  ]
})
export class CalculatorComponent implements AfterViewInit {

  constructor(private messagesService: MessagesService, private dropdownService: DropdownService) { }

  ngAfterViewInit() {
    //region Load everything together
    //Reveals both shiny app iframe and BSCS section at the same time
    const showPage = (): void => {
      let sec2: HTMLElement = document.getElementById('section-2');
      let spinner: HTMLElement = document.getElementById('load-spinner');
      spinner.classList.add('hidden');
      let sec1: HTMLElement = document.getElementById('section-1');
      sec1.classList.remove('invisible');
      sec2.classList.remove('invisible');
    }

    //Checks the height of shiny app iframe
    const getSec1Height = (): number => {
      let sec1: HTMLElement = document.getElementById('section-1');
      let s1h = sec1.getBoundingClientRect();
      let difference = s1h.bottom - s1h.top;
      return difference;
    }

    //Checks to see if shiny app iframe has loaded and reveals BSCS section once loaded
    const determineShowTime = (): void => {
      let h = getSec1Height();
      if(h > 200) {
        showPage();
      }
      else {
        window.setTimeout(determineShowTime, 500);
      }
    };

    determineShowTime();

    const icc_state: HTMLElement = document.getElementById('icc-state');
    const icc_grades: HTMLElement = document.getElementById('icc-grades');
    const r2_state: HTMLElement = document.getElementById('r2-state');
    const r2_grades: HTMLElement = document.getElementById('r2-grades');
    const r2_covariate: HTMLElement = document.getElementById('r2-covariate');
    const r2_domain: HTMLElement = document.getElementById('r2-domain');
    const default_grades: string[] = ['4','5','6','7','8','9','10','11'];

    //Adds/removes hidden class to grades without data
    const limitIccGrades = (): any => {
      let grades: string[] = this.dropdownService.getIccGrades();
      for(let i = 0; i < 8; i++) {
        let current_id = document.getElementById(`icc-grades-${i}`);
        if(grades.includes(current_id.innerHTML)) {
          current_id.classList.remove('hidden');
        } else {
          current_id.classList.add('hidden');
        }
      }
    }

    const limitr2Grades = (): any => {
      let grades: string[] = this.dropdownService.getr2Grades();
      for(let i = 0; i < 8; i++) {
        let current_id = document.getElementById(`r2-grades-${i}`);
        if(grades.includes(current_id.innerHTML)) {
          current_id.classList.remove('hidden');
        } else {
          current_id.classList.add('hidden');
        }
      }
    }

    const set_icc_grades = (selected_state): void => {
      if(selected_state === 'Michigan') {
        this.dropdownService.setIccGrades(['5','8','11']);
      } else if(selected_state === 'Texas') {
        this.dropdownService.setIccGrades(['5','8','10','11']);
      } else if(selected_state === 'Wisconsin') {
        this.dropdownService.setIccGrades(['4','8','10']);
      } else {
        this.dropdownService.setIccGrades(default_grades);
      }

      limitIccGrades();
    }

    const set_icc_state = (): void => {
      const selected_state = icc_state.querySelector('span').innerHTML;
      this.dropdownService.setIccState(selected_state);
      set_icc_grades(selected_state);
    }

    const set_r2_grades = (selected_state): void => {
      if(selected_state === 'Michigan') {
        this.dropdownService.setr2Grades(['5','8','11']);
      } else if(selected_state === 'Texas') {
        this.dropdownService.setr2Grades(['5','8','10','11']);
      } else if(selected_state === 'Wisconsin') {
        this.dropdownService.setr2Grades(['4','8','10']);
      } else {
        this.dropdownService.setr2Grades(default_grades);
      }

      limitr2Grades();
    }

    //Gets the text of the selected state every time so the grades are changed if the state is changed
    const set_r2_state = (): void => {
      const selected_state = r2_state.querySelector('span').innerHTML;
      this.dropdownService.setr2State(selected_state);
      set_r2_grades(selected_state);
    }

    //When either state or grades dropdown is clicked, the selected state is set and the grades for those states that don't have data are hidden under the grades dropdown
    icc_grades.addEventListener('click', set_icc_state);
    r2_grades.addEventListener('click', set_r2_state);
    icc_state.addEventListener('click', set_icc_state);
    r2_state.addEventListener('click', set_r2_state);

    const hideDomain = (): void => {
      r2_domain.classList.add('hidden');
    }

    const showDomain = (): void => {
      if(r2_domain.classList.contains('hidden')) {
        r2_domain.classList.remove('hidden');
      }
    }
    const toggleDomain = (): void => {
      const cov_value: string = r2_covariate.querySelector('span').innerHTML;
      if(cov_value === 'Demo Only') {
        // this.dropdownService.hideDomain(true);
        hideDomain();
      } else {
        showDomain();
      } 
    }

    r2_covariate.addEventListener('click', toggleDomain);

  }
}
