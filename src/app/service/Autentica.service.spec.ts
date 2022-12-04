/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutenticaService } from './Autentica.service';

describe('Service: Autentica', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticaService]
    });
  });

  it('should ...', inject([AutenticaService], (service: AutenticaService) => {
    expect(service).toBeTruthy();
  }));
});
