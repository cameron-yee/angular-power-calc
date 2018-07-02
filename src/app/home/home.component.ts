import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('calculatorbutton') calculatorbutton: any;

  constructor() { }

  ngOnInit() {
    this.calculatorbutton.nativeElement.addEventListener('click',() => window.scroll(0,180));
  }

}
