import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { CopyrightComponent } from '../copyright/copyright.component';
import { NgModule } from '@angular/core';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, CopyrightComponent],
      imports: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should move the screen to 0, 180', async(() => {
  //   spyOn(component.contact, 'click');
  //   component.contact.onClick();
  //   expect(window.scrollX === 0 && window.scrollY === 180);
  // }));
});
