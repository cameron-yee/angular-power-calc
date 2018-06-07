import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsBoxComponent } from './results-box.component';
import { MessagesService } from '../messages.service';

describe('ResultsBoxComponent', () => {
  let component: ResultsBoxComponent;
  let fixture: ComponentFixture<ResultsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsBoxComponent ],
      providers: [ {provide: MessagesService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
