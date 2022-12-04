/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidatorDocumentService } from './validatorDocument.service';

describe('Service: ValidatorDocument', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorDocumentService]
    });
  });

  it('should ...', inject([ValidatorDocumentService], (service: ValidatorDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
