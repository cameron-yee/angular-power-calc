import { Component, Input, AfterViewInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  // providers: [MessagesService]
})
export class DropdownComponent implements AfterViewInit {
  //Gets list of dropdown items and span item for each dropdown
  @ViewChild('textspan') textspan: any;
  @ViewChildren('dropdownitem') dropdown_items_query: QueryList<any>;

  constructor(private messagesService: MessagesService) { }

  //Sets values for dropdown component instance in html
  @Input() id: string;
  @Input() p?: string;
  @Input() items: string[];

  ngAfterViewInit() {
    //Sets dropdown span text to selected value
    let setSelection: any = (item_text: string, item_id_raw: string) => {
      this.textspan.nativeElement.innerText = item_text;
      
      let item_id: string = item_id_raw.slice(0,-2);

      this.messagesService.pushValue(item_id, item_text);
    }

    //Adds click eventListener to each dropdown clickable item
    for(let i = 0; i < this.dropdown_items_query.length; i++) {
      let item_text: string = this.dropdown_items_query.toArray()[i].nativeElement.innerText;
      let item_id_raw: string = this.dropdown_items_query.toArray()[i].nativeElement.id;
      this.dropdown_items_query.toArray()[i].nativeElement.addEventListener('click', function() {setSelection(item_text, item_id_raw)});
    }
  }
}
