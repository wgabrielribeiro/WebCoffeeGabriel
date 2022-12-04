/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidatorPasswordService } from './ValidatorPassword.service';

describe('Service: ValidatorPassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorPasswordService]
    });
  });

  it('should ...', inject([ValidatorPasswordService], (service: ValidatorPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
