import { TestBed, inject } from '@angular/core/testing';

import { FormspreeService } from './formspree.service';
import { HttpClientModule } from '@angular/common/http';

describe('FormspreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormspreeService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([FormspreeService], (service: FormspreeService) => {
    expect(service).toBeTruthy();
  }));
});
