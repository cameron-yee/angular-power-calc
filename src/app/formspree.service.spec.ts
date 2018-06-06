import { TestBed, inject } from '@angular/core/testing';

import { FormspreeService } from './formspree.service';

describe('FormspreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormspreeService]
    });
  });

  it('should be created', inject([FormspreeService], (service: FormspreeService) => {
    expect(service).toBeTruthy();
  }));
});
