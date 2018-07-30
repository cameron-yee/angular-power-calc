import { Component, ViewChild } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent {
  @ViewChild('submit') submit: any;

  constructor(private messagesService: MessagesService) { }

  ngAfterViewInit() {
      const table4 = {
          michigan: {
              grade5icc: 0.261,
              grade5se: 0.007,
              grade8icc: 0.261,
              grade8se: 0.009,
              grade11icc: 0.312,
              grade11se: 0.011,
          },
          texas: {
              grade5icc: 0.191,
              grade5se: 0.004,
              grade8icc: 0.172,
              grade8se: 0.005,
              grade10icc: 0.196,
              grade10se: 0.007,
              grade11icc: 0.191,
              grade11se: 0.007,
          },
          wisconsin: {
              grade4icc: 0.190,
              grade4se: 0.007,
              grade8icc: 0.256,
              grade8se: 0.012,
              grade10icc: 0.251,
              grade10se: 0.013,
          },
      };
      
      const table5 = {
          michigan: {
              grade5iccl2: 0.076,
              grade5se1: 0.004,
              grade5iccl3: 0.146,
              grade5se2: 0.010,
              grade8iccl2: 0.102,
              grade8se1: 0.009,
              grade8iccl3: 0.117,
              grade8se2: 0.011,
              grade11iccl2: 0.270,
              grade11se1: 0.013,
              grade11iccl3: 0.031,
              grade11se2: 0.008,
          },
          texas: {
              grade5iccl2: 0.118,
              grade5se1: 0.003,
              grade5iccl3: 0.079,
              grade5se2: 0.007,
              grade8iccl2: 0.104,
              grade8se1: 0.005,
              grade8iccl3: 0.060,
              grade8se2: 0.007,
              grade10iccl2: 0.136,
              grade10se1: 0.008,
              grade10iccl3: 0.055,
              grade10se2: 0.008,
              grade11iccl2: 0.127,
              grade11se1: 0.008,
              grade11iccl3: 0.059,
              grade11se2: 0.008,
          },
          wisconsin: {
              grade4iccl2: 0.095,
              grade4se1: 0.005,
              grade4iccl3: 0.037,
              grade4se2: 0.005,
              grade8iccl2: 0.107,
              grade8se1: 0.008,
              grade8iccl3: 0.036,
              grade8se2: 0.006,
              grade10iccl2: 0.079,
              grade10se1: 0.008,
              grade10iccl3: 0.042,
              grade10se2: 0.006,
          },
      };

      const table6 = {
          twolevelhlm: {
              michigan: {
                  grade5r2l1: 0.068,
                  grade5r2l2: 0.799,
                  grade8r2l1: 0.073,
                  grade8r2l2: 0.782,
                  grade11r2l1: 0.069,
                  grade11r2l2: 0.645,
              },
              texas: {
                  grade5r2l1: 0.103,
                  grade5r2l2: 0.527,
                  grade8r2l1: 0.134,
                  grade8r2l2: 0.615,
                  grade10r2l1: 0.128,
                  grade10r2l2: 0.615,
                  grade11r2l1: 0.130,
                  grade11r2l2: 0.598,
              },
              wisconsin: {
                  grade4r2l1: 0.079,
                  grade4r2l2: 0.798,
                  grade8r2l1: 0.106,
                  grade8r2l2: 0.842,
                  grade10r2l1: 0.117,
                  grade10r2l2: 0.856,
              },
          },
          threelevelhlm: {
              michigan: {
                  grade5r2l1: 0.069,
                  grade5r2l2: 0.499,
                  grade5r2l3: 0.883,
                  grade8r2l1: 0.073,
                  grade8r2l2: 0.554,
                  grade8r2l3: 0.885,
                  grade11r2l1: 0.069,
                  grade11r2l2: 0.635,
                  grade11r2l3: 0.950,
              },
              texas: {
                  grade5r2l1: 0.103,
                  grade5r2l2: 0.507,
                  grade5r2l3: 0.498,
                  grade8r2l1: 0.134,
                  grade8r2l2: 0.663,
                  grade8r2l3: 0.458,
                  grade10r2l1: 0.128,
                  grade10r2l2: 0.609,
                  grade10r2l3: 0.665,
                  grade11r2l1: 0.130,
                  grade11r2l2: 0.616,
                  grade11r2l3: 0.618,
              },
              wisconsin: {
                  grade4r2l1: 0.079,
                  grade4r2l2: 0.638,
                  grade4r2l3: 0.815,
                  grade8r2l1: 0.107,
                  grade8r2l2: 0.625,
                  grade8r2l3: 0.889,
                  grade10r2l1: 0.118,
                  grade10r2l2: 0.559,
                  grade10r2l3: 0.875,
              },
          },
      };

      const table7 = {
          twolevelhlm: {
              michigan: {
                  science: {
                      grade5r2l2: 0.832,
                      grade8r2l2: 0.837,
                      grade11r2l2: 0.934,
                  },
                  reading: {
                      grade5r2l2: 0.764,
                      grade8r2l2: 0.693,
                      grade11r2l2: 0.876,
                  },
                  math: {
                      grade5r2l2: 0.622,
                      grade8r2l2: 0.717,
                      grade11r2l2: 0.904,
                  },
              },
              texas: {
                  science: {
                      grade5r2l2: 0.675,
                      grade8r2l2: 0.802,
                      grade10r2l2: 0.868,
                      grade11r2l2: 0.866,
                  },
                  reading: {
                      grade5r2l2: 0.582,
                      grade8r2l2: 0.658,
                      grade10r2l2: 0.629,
                      grade11r2l2: 0.584,
                  },
                  math: {
                      grade5r2l2: 0.569,
                      grade8r2l2: 0.671,
                      grade10r2l2: 0.761,
                      grade11r2l2: 0.783,
                  },
              },
              wisconsin: {
                  science: {
                      grade4r2l2: 0.821,
                      grade8r2l2: 0.908,
                      grade10r2l2: 0.916,
                  },
                  reading: {
                      grade4r2l2: 0.770,
                      grade8r2l2: 0.843,
                      grade10r2l2: 0.850,
                  },
                  math: {
                      grade4r2l2: 0.699,
                      grade8r2l2: 0.782,
                      grade10r2l2: 0.859,
                  },
              },
          },
          threelevelhlm: {
              michigan: {
                  science: {
                      grade5r2l2: 0.541,
                      grade5r2l3: 0.971,
                      grade8r2l2: 0.642,
                      grade8r2l3: 0.946,
                      grade11r2l2: 0.942,
                      grade11r2l3: 0.844,
                  },
                  reading: {
                      grade5r2l2: 0.416,
                      grade5r2l3: 0.918,
                      grade8r2l2: 0.467,
                      grade8r2l3: 0.857,
                      grade11r2l2: 0.893,
                      grade11r2l3: 0.743,
                  },
                  math: {
                      grade5r2l2: 0.396,
                      grade5r2l3: 0.657,
                      grade8r2l2: 0.509,
                      grade8r2l3: 0.780,
                      grade11r2l2: 0.928,
                      grade11r2l3: 0.692,
                  },
              },
              texas: {
                  science: {
                      grade5r2l2: 0.546,
                      grade5r2l3: 0.917,
                      grade8r2l2: 0.739,
                      grade8r2l3: 0.856,
                      grade10r2l2: 0.858,
                      grade10r2l3: 0.859,
                      grade11r2l2: 0.865,
                      grade11r2l3: 0.836,
                  },
                  reading: {
                      grade5r2l2: 0.472,
                      grade5r2l3: 0.713,
                      grade8r2l2: 0.619,
                      grade8r2l3: 0.623,
                      grade10r2l2: 0.634,
                      grade10r2l3: 0.525,
                      grade11r2l2: 0.583,
                      grade11r2l3: 0.586,
                  },
                  math: {
                      grade5r2l2: 0.440,
                      grade5r2l3: 0.755,
                      grade8r2l2: 0.630,
                      grade8r2l3: 0.617,
                      grade10r2l2: 0.797,
                      grade10r2l3: 0.581,
                      grade11r2l2: 0.803,
                      grade11r2l3: 0.679,
                  },
              },
              wisconsin: {
                  science: {
                      grade4r2l2: 0.682,
                      grade4r2l3: 0.880,
                      grade8r2l2: 0.817,
                      grade8r2l3: 0.844,
                      grade10r2l2: 0.818,
                      grade10r2l3: 0.798,
                  },
                  reading: {
                      grade4r2l2: 0.619,
                      grade4r2l3: 0.818,
                      grade8r2l2: 0.749,
                      grade8r2l3: 0.688,
                      grade10r2l2: 0.753,
                      grade10r2l3: 0.639,
                  },
                  math: {
                      grade4r2l2: 0.575,
                      grade4r2l3: 0.609,
                      grade8r2l2: 0.682,
                      grade8r2l3: 0.567,
                      grade10r2l2: 0.789,
                      grade10r2l3: 0.632,
                  },
              },
          },
      };

      const table8 = {
          twolevelhlm: {
              michigan: {
                  science: {
                      grade8r2l1: 0.413,
                      grade8r2l2: 0.797,
                      grade11r2l1: 0.450,
                      grade11r2l2: 0.881,
                  },
                  reading: {
                      grade5r2l1: 0.429,
                      grade5r2l2: 0.846,
                      grade8r2l1: 0.419,
                      grade8r2l2: 0.835,
                      grade11r2l1: 0.273,
                      grade11r2l2: 0.815,
                  },
                  math: {
                      grade5r2l1: 0.400,
                      grade5r2l2: 0.736,
                      grade8r2l1: 0.441,
                      grade8r2l2: 0.761,
                      grade11r2l1: 0.419,
                      grade11r2l2: 0.832,
                  },
              },
              texas: {
                  science: {
                      grade8r2l1: 0.297,
                      grade8r2l2: 0.640,
                      grade10r2l1: 0.470,
                      grade10r2l2: 0.806,
                      grade11r2l1: 0.505,
                      grade11r2l2: 0.912,
                  },
                  reading: {
                      grade5r2l1: 0.268,
                      grade5r2l2: 0.634,
                      grade8r2l1: 0.319,
                      grade8r2l2: 0.745,
                      grade10r2l1: 0.167,
                      grade10r2l2: 0.664,
                      grade11r2l1: 0.191,
                      grade11r2l2: 0.707,
                  },
                  math: {
                      grade5r2l1: 0.270,
                      grade5r2l2: 0.628,
                      grade8r2l1: 0.413,
                      grade8r2l2: 0.754,
                      grade10r2l1: 0.439,
                      grade10r2l2: 0.839,
                      grade11r2l1: 0.445,
                      grade11r2l2: 0.817,
                  },
              },
              wisconsin: {
                  science: {
                      grade8r2l1: 0.418,
                      grade8r2l2: 0.868,
                      grade10r2l1: 0.537,
                      grade10r2l2: 0.899,
                  },
                  reading: {
                      grade4r2l1: 0.526,
                      grade4r2l2: 0.836,
                      grade8r2l1: 0.515,
                      grade8r2l2: 0.911,
                      grade10r2l1: 0.377,
                      grade10r2l2: 0.682,
                  },
                  math: {
                      grade4r2l1: 0.453,
                      grade4r2l2: 0.760,
                      grade8r2l1: 0.436,
                      grade8r2l2: 0.828,
                      grade10r2l1: 0.368,
                      grade10r2l2: 0.643,
                  },
              },
          },
          threelevelhlm: {
              michigan: {
                  science: {
                      grade8r2l1: 0.413,
                      grade8r2l2: 0.693,
                      grade8r2l3: 0.783,
                      grade11r2l1: 0.450,
                      grade11r2l2: 0.904,
                      grade11r2l3: 0.774,
                  },
                  reading: {
                      grade5r2l1: 0.429,
                      grade5r2l2: 0.598,
                      grade5r2l3: 0.944,
                      grade8r2l1: 0.419,
                      grade8r2l2: 0.677,
                      grade8r2l3: 0.895,
                      grade11r2l1: 0.273,
                      grade11r2l2: 0.825,
                      grade11r2l3: 0.761,
                  },
                  math: {
                      grade5r2l1: 0.400,
                      grade5r2l2: 0.529,
                      grade5r2l3: 0.789,
                      grade8r2l1: 0.441,
                      grade8r2l2: 0.580,
                      grade8r2l3: 0.784,
                      grade11r2l1: 0.419,
                      grade11r2l2: 0.873,
                      grade11r2l3: 0.654,
                  },
              },
              texas: {
                  science: {
                      grade8r2l1: 0.297,
                      grade8r2l2: 0.630,
                      grade8r2l3: 0.565,
                      grade10r2l1: 0.470,
                      grade10r2l2: 0.817,
                      grade10r2l3: 0.740,
                      grade11r2l1: 0.505,
                      grade11r2l2: 0.903,
                      grade11r2l3: 0.922,
                  },
                  reading: {
                      grade5r2l1: 0.268,
                      grade5r2l2: 0.558,
                      grade5r2l3: 0.713,
                      grade8r2l1: 0.319,
                      grade8r2l2: 0.758,
                      grade8r2l3: 0.605,
                      grade10r2l1: 0.167,
                      grade10r2l2: 0.688,
                      grade10r2l3: 0.550,
                      grade11r2l1: 0.191,
                      grade11r2l2: 0.678,
                      grade11r2l3: 0.729,
                  },
                  math: {
                      grade5r2l1: 0.270,
                      grade5r2l2: 0.522,
                      grade5r2l3: 0.747,
                      grade8r2l1: 0.413,
                      grade8r2l2: 0.714,
                      grade8r2l3: 0.741,
                      grade10r2l1: 0.439,
                      grade10r2l2: 0.865,
                      grade10r2l3: 0.718,
                      grade11r2l1: 0.445,
                      grade11r2l2: 0.827,
                      grade11r2l3: 0.758,
                  },
              },
              wisconsin: {
                  science: {
                      grade8r2l1: 0.418,
                      grade8r2l2: 0.789,
                      grade8r2l3: 0.744,
                      grade10r2l1: 0.537,
                      grade10r2l2: 0.803,
                      grade10r2l3: 0.777,
                  },
                  reading: {
                      grade4r2l1: 0.527,
                      grade4r2l2: 0.727,
                      grade4r2l3: 0.875,
                      grade8r2l1: 0.515,
                      grade8r2l2: 0.829,
                      grade8r2l3: 0.830,
                      grade10r2l1: 0.446,
                      grade10r2l2: 0.804,
                      grade10r2l3: 0.634,
                  },
                  math: {
                      grade4r2l1: 0.453,
                      grade4r2l2: 0.662,
                      grade4r2l3: 0.676,
                      grade8r2l1: 0.436,
                      grade8r2l2: 0.763,
                      grade8r2l3: 0.560,
                      grade10r2l1: 0.462,
                      grade10r2l2: 0.758,
                      grade10r2l3: 0.532,
                  },
              },
          },
      };

    let r2Messages = (): void => {
      try {
        let values: Object = this.messagesService.getValues();
        let r2_covariate: string = values['r2-covariate'];
        //Only one impact
        let r2_impact: string = values['icc-impact'];
        let r2_domain: string = values['r2-domain'];
        //Same as icc grades, only 1 grades and state variable now
        let r2_state: string = values['icc-state'];
        let r2_grades: string = values['icc-grades'];

        let r2_messages_values: string[] = [];

        if(r2_covariate === 'Student-level demographics') {
          if(r2_impact === '2-level') {
            r2_messages_values = [`table6.twolevelhlm.${r2_state.toLowerCase()}.grade${r2_grades}r2l1`,`table6.twolevelhlm.${r2_state.toLowerCase()}.grade${r2_grades}r2l2`];
          } else {
            r2_messages_values = [`table6.threelevelhlm.${r2_state.toLowerCase()}.grade${r2_grades}r2l1`,`table6.threelevelhlm.${r2_state.toLowerCase()}.grade${r2_grades}r2l2`,`table6.threelevelhlm.${r2_state.toLowerCase()}.grade${r2_grades}r2l3`];
          }
        } else if(r2_covariate === 'School-level pretest') {
          if(r2_impact === '2-level') {
            r2_messages_values = [`table7.twolevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l2`];
          } else {
            r2_messages_values = [`table7.threelevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l2`,`table7.threelevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l3`];
          }
        } else if(r2_covariate === 'Student-level pretest') {
          if(r2_impact === '2-level') {
            r2_messages_values = [`table8.twolevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l1`,`table8.twolevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l2`];
          } else {
            r2_messages_values = [`table8.threelevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l1`,`table8.threelevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l2`,`table8.threelevelhlm.${r2_state.toLowerCase()}.${r2_domain.toLowerCase()}.grade${r2_grades}r2l3`];
          }
        }

        let r2_messages: string[] = [];

        // TODO: use Function instead of eval
        // let getValue = new Function('value', 'return (value)');

        for(let i: number = 0; i < r2_messages_values.length; i++) {
          let r2_message: string;
          if(eval(r2_messages_values[i]) == undefined) {
            r2_message = `There is no data for ${r2_grades}th Grade ${r2_state} R2 L${i + 1}`
          } else {
            //TODO: find solution to remove eval()
            r2_message = `${r2_grades}th Grade ${r2_state} R2 L${i + 1}: ${eval(r2_messages_values[i])}`;
          }
          r2_messages[i] = r2_message;
        }

        this.messagesService.setr2Messages(r2_messages);
      } catch(TypeError) {
        console.log(TypeError);
      }
    }

    let iccMessages = (): void => {
      try {
        let values: Object = this.messagesService.getValues();
        let icc_impact: string = values['icc-impact'];
        let icc_state: string = values['icc-state'];
        let icc_grades: string = values['icc-grades'];

        let icc_messages_values: string[] = (icc_impact === '2-level') ? [`table4.${icc_state.toLowerCase()}.grade${icc_grades}icc`] : [`table5.${icc_state.toLowerCase()}.grade${icc_grades}iccl2`,`table5.${icc_state.toLowerCase()}.grade${icc_grades}iccl3`];

        let icc_messages: string[] = [];

        //TODO: use Function instead of eval
        // let getValue = new Function('value', 'return (value)');

        for(let i: number = 0; i < icc_messages_values.length; i++) {
          let icc_message: string;
          if(eval(icc_messages_values[i]) == undefined) {
            if(icc_impact === '2-level') {
              icc_message = `There is no data for ${icc_grades}th Grade ${icc_state} ICC`
            } else {
              icc_message = `There is no data for ${icc_grades}th Grade ${icc_state} ICC L${i + 2}`
            }
          } else {
            //TODO: find solution to remove eval()
            if(icc_impact === '2-level') {
              icc_message = `${icc_grades}th Grade ${icc_state} ICC: ${eval(icc_messages_values[i])}`;
            } else {
              icc_message = `${icc_grades}th Grade ${icc_state} ICC L${i + 2}: ${eval(icc_messages_values[i])}`;
            }
          }
          icc_messages[i] = icc_message;
        }
        this.messagesService.setIccMessages(icc_messages);
      } catch(TypeError) {
        console.log(TypeError);
      }
    }

    this.submit.nativeElement.addEventListener('click', () => {iccMessages(), r2Messages(), this.messagesService.setClicked()});
  }
}
