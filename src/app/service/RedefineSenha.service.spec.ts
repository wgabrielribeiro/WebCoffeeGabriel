/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RedefineSenhaService } from './RedefineSenha.service';

describe('Service: RedefineSenha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedefineSenhaService]
    });
  });

  it('should ...', inject([RedefineSenhaService], (service: RedefineSenhaService) => {
    expect(service).toBeTruthy();
  }));
});
