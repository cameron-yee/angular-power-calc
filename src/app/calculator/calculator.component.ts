import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [MessagesService]
})
export class CalculatorComponent implements AfterViewInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
