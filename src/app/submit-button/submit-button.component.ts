import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent implements OnInit {
  @ViewChild('submit') submit: any;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let messages = () => {
      let values = this.messagesService.getValues();
      let messages = this.messagesService.getMessages();
      console.log(values);
      console.log(messages);
    }
    this.submit.nativeElement.addEventListener('click', messages);
  }

}
