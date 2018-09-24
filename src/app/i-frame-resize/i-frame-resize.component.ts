import { Component, AfterViewInit, ViewChild } from '@angular/core';

// import * as $ from 'jquery';

import * as resizer from 'iframe-resizer';


@Component({
  selector: 'app-i-frame-resize',
  templateUrl: './i-frame-resize.component.html',
  styleUrls: ['./i-frame-resize.component.css']
})
export class IFrameResizeComponent implements AfterViewInit {
  @ViewChild('reload') reload: any; 
  @ViewChild('frame') frame: any; 

  ngAfterViewInit() {
    resizer.iframeResizer();

    const reload: any = (elem: any) => {
      const f = this.frame.nativeElement;
      f.src = f.src;
    }

    this.reload.nativeElement.addEventListener('click', () => { reload() });
  }

}
