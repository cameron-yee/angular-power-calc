import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { MessagesService } from '../messages.service'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements AfterViewInit {
  //Gets list of dropdown items and span item for each dropdown
  @ViewChild('textspan') textspan: any;
  @ViewChildren('dropdownitem') dropdown_items_query: QueryList<any>;

  constructor(private messagesService: MessagesService) { }

  //Sets values for dropdown component instance in html
  @Input() id: string;
  @Input() p?: string;
  @Input() items: Array<any>;


  ngOnInit() {
  }

  ngAfterViewInit() {
    // let icc_dropdown_values: any[] = [];
    // let r2_dropdown_values: any[] = [];

    //Sets dropdown span text to selected value
    let setSelection: any = (item_text, item_id_raw) => {
      this.textspan.nativeElement.innerText = item_text;
      
      let item_id = item_id_raw.slice(0,-2);
      console.log(item_id);
      console.log(item_text);
      let icc_dropdown_order: string[] = ['icc-impact','icc-state','icc-grades'];
      let r2_dropdown_order: string[] = ['r2-covariate','r2-domain','r2-impact','r2-state','r2-grades'];

      // if(item_id.slice(0,3) === 'icc') {
      //   let value_index = icc_dropdown_order.indexOf(item_id);
      //   icc_dropdown_values[value_index] = item_text;
      // } else {
      //   let value_index = r2_dropdown_order.indexOf(item_id);
      //   r2_dropdown_values[value_index] = item_text;
      // }

      this.messagesService.pushValue(item_id, item_text);
    }

    //Adds click eventListener to each dropdown clickable item
    for(let i = 0; i < this.dropdown_items_query.length; i++) {
      let item_text = this.dropdown_items_query.toArray()[i].nativeElement.innerText;
      let item_id_raw = this.dropdown_items_query.toArray()[i].nativeElement.id;
      this.dropdown_items_query.toArray()[i].nativeElement.addEventListener('click', function() {setSelection(item_text, item_id_raw)});
    }

  }
}
