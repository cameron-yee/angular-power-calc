import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { CopyrightComponent } from '../copyright/copyright.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

@NgModule({
  imports: [
    CopyrightComponent
  ]
})
export class FooterComponent implements OnInit {
  @ViewChild('contact') contact: any;

  constructor() { }

  ngOnInit() {
    this.contact.nativeElement.addEventListener('click', function() {window.scroll(0,180)});
  }

}
