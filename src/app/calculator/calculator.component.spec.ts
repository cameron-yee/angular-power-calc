import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { IFrameResizeComponent } from '../i-frame-resize/i-frame-resize.component';
import { DropdownService } from '../dropdown.service';
import { MessagesService } from '../messages.service';
import { ResultsBoxComponent } from '../results-box/results-box.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent, SubmitButtonComponent, DropdownComponent, IFrameResizeComponent, ResultsBoxComponent ],
      imports: [
      ],
      providers: [DropdownService, MessagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call determineShowTime()', () => {
    let dst: any = jasmine.createSpy('determineShowTime');
    component.ngAfterViewInit();
    expect(dst).toHaveBeenCalled();
  })
});
