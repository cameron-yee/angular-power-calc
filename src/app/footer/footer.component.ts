import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('contact') contact: any;

  constructor() { }

  ngOnInit() {
    this.contact.nativeElement.addEventListener('click', function() {window.scroll(0,0)});
  }

}
