import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { IFrameResizeComponent } from './i-frame-resize/i-frame-resize.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { ResultsBoxComponent } from './results-box/results-box.component';
import {RouterTestingModule} from "@angular/router/testing";
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        routingComponents,
        HeaderComponent,
        NavbarComponent,
        FooterComponent,
        CopyrightComponent,
        IFrameResizeComponent,
        DropdownComponent,
        SubmitButtonComponent,
        ResultsBoxComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Power Calculator');
  }));
});
