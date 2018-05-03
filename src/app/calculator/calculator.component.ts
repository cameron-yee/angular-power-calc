import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // let items: HTMLCollectionOf<Element> = document.getElementsByClassName('dropdown-item');
    // console.log('HIT');

    // let setSelection: any = (item_id) => {
    //   console.log('item_id: ' + item_id);
    //   let item: any = document.getElementById(item_id);
    //   console.log('item: ' + item);
    //   let item_text: string = item.text;
    //   console.log('item_text: ' + item_text);
    //   let span_id: string = item_id.slice(0, -1) + 'span';
    //   console.log('span_id: ' + span_id);
    //   let span: any = document.getElementById(span_id);
    //   console.log('span: ' + span);
    //   span.text = item_text;
    // }

    // let dropdown_value: any = () => {
    //   console.log('AHH');
    //   for(let i: number = 0; i < items.length; i++) {
    //     console.log(items[i]);
    //     console.log(items[i].id);
    //     items[i].addEventListener("click", setSelection(items[i].id));
    //   }
    // };

    // dropdown_value();
  }

}
