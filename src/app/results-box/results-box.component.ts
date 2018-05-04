import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-results-box',
  templateUrl: './results-box.component.html',
  styleUrls: ['./results-box.component.css']
})
export class ResultsBoxComponent implements OnInit {

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let icc_message_values: string[] = this.messagesService.getIccMessageValues();
    let r2_message_values: string[] = this.messagesService.getR2MessageValues();
    console.log(icc_message_values);
    console.log(r2_message_values);

    let displayMessages = (icc_message_values, r2_message_values) => {
      
    }
  }
}
