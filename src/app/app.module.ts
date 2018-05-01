import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { IFrameResizeComponent } from './i-frame-resize/i-frame-resize.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CopyrightComponent,
    IFrameResizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
