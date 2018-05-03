import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2, ViewChild, ViewChildren, QueryList} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements AfterViewInit {
  @ViewChild('textspan') textspan: any;
  @ViewChildren('dropdownitem') dropdown_items_query: QueryList<any>;

  constructor(private rd: Renderer2) { }

  @Input() id: string;
  @Input() p?: string;
  @Input() items: Array<any>;


  ngOnInit() {
  }

  ngAfterViewInit() {
    let setSelection: any = (item_id) => {
      console.log('item_id: ' + item_id);
      let item: any = document.getElementById(item_id);
      console.log('item: ' + item);
      let item_text: string = item.text;
      console.log('item_text: ' + item_text);
      let span_id: string = item_id.slice(0, -1) + 'span';
      console.log('span_id: ' + span_id);
      let span: any = document.getElementById(span_id);
      console.log('span: ' + span);
      span.text = item_text;
    }

    let test: any = () => {
      console.log(1 + 1);
    }

    console.log(this.textspan);
    // @ViewChild(id + '-span');

    for(let i = 0; i < this.dropdown_items_query.length; i++) {
      this.dropdown_items_query.toArray()[i].nativeElement.addEventListener('click', test);
      //setSelection(this.dropdown_items_query.toArray()[i].nativeElement.id)
    }

    let dropdown_items: Array<any> = [];
    for(let i = 0; i < this.dropdown_items_query.length; i++) {
      let item_id = this.dropdown_items_query.toArray()[i].nativeElement.id;
      console.log(item_id);
      // dropdown_items.push(item_id);
      // let item = document.getElementById(item_id);
      // item.addEventListener('click', setSelection(item))
    }
    console.log(dropdown_items);

      
  }
}
