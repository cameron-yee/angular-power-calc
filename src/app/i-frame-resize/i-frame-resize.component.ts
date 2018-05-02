import { Component, AfterViewInit } from '@angular/core';

// import * as $ from 'jquery';

import * as resizer from 'iframe-resizer';


@Component({
  selector: 'app-i-frame-resize',
  templateUrl: './i-frame-resize.component.html',
  styleUrls: ['./i-frame-resize.component.css']
})
export class IFrameResizeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    resizer.iframeResizer();
  }

}
