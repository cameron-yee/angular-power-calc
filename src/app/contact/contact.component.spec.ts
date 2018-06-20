import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  //TODO: Figure out how to reference email_group fields
  
  // it('should return null', () => {
  //   component.contactForm.controls.email_group['email'].setValue('cyee@bscs.org');
  //   component.contactForm.controls.email_group['verifyEmail'].setValue('cyee@bscs.org');
  //   let return_value = component.emailMatch(component.contactForm);
  //   expect(return_value === null);

  // });
  // it('fo', () => {
  //   component.contactForm.controls['emai']
  //   component.submitForm(component.contactForm);
    
  // });
});

