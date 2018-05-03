import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  iccvalues = [
    [
      'icc-grades',
      'Do you plan on using a 2-level <sup><a href="" data-toggle="tooltip" data-placement="top" title="A 2 level impact model is ..."><i class="fa fa-info-circle" aria-hidden="true"></i></a></sup> or <a href="" data-toggle="tooltip" data-placement="top" title="A 3 level impact model is ...">3-level</i></a> impact model?',
      ['2-level', '3-level'],
    ],
    [
      'icc-state',
      'Which state are you from?',
      ['Michigan', 'Texas', 'Wisconsin'],
    ],
    [
      'icc-grades',
      'What grades are you teaching?',
      [4, 5, 6, 7, 8, 9, 10, 11],
    ],
  ];

  r2values = [
    [
      'r2-covariate',
      'What type of covariate are you using?',
      ['Demo Only', 'School Level Pretest', 'Individual Level Pretest']
    ],
    [
      'r2-domain',
      'What domain?',
      ['Math', 'Reading', 'Science']
    ],
    [
      'r2-impact',
      'Do you plan on using a 2-level or 3-level impact model?',
      ['2-level', '3-level']
    ],
    [
      'r2-state',
      'Which state are you from?',
      ['Michigan', 'Texas', 'Wisconsin']
    ],
    [
      'r2-grades',
      'What grades are you teaching?',
      [4,5,6,7,8,9,10,11]
    ]
  ];
}
