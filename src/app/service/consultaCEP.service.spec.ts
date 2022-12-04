/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaCEPService } from './consultaCEP.service';

describe('Service: ConsultaCEP', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaCEPService]
    });
  });

  it('should ...', inject([ConsultaCEPService], (service: ConsultaCEPService) => {
    expect(service).toBeTruthy();
  }));
});
