import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-results-box',
  templateUrl: './results-box.component.html',
  styleUrls: ['./results-box.component.css']
})
export class ResultsBoxComponent {

  constructor(private messagesService: MessagesService) { }

  ngAfterViewInit() {
    let displayMessages = (): void => {
      let clicked: boolean = this.messagesService.getClicked();
      if(clicked) {
        let icc_messages: string[] = this.messagesService.getIccMessages();
        let r2_messages: string[] = this.messagesService.getr2Messages();
        this.im = icc_messages;
        this.rm = r2_messages;
      }
    }

    document.body.addEventListener('click', displayMessages);
  }

  //icc_messsages and r2_messages attribute
  im: string[] = [];
  rm: string[] = [];
}
