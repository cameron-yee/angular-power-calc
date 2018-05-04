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
    let setSelection: any = (item_text) => {
      this.textspan.nativeElement.innerText = item_text;
    }

    for(let i = 0; i < this.dropdown_items_query.length; i++) {
      let item_text = this.dropdown_items_query.toArray()[i].nativeElement.innerText;
      this.dropdown_items_query.toArray()[i].nativeElement.addEventListener('click', function() {setSelection(item_text)});
    }

    let dropdown_items: Array<any> = [];
    for(let i = 0; i < this.dropdown_items_query.length; i++) {
      let item_id = this.dropdown_items_query.toArray()[i].nativeElement.id;
    }
  }
}
