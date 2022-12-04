/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DadosCadastraisService } from './DadosCadastrais.service';

describe('Service: DadosCadastrais', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosCadastraisService]
    });
  });

  it('should ...', inject([DadosCadastraisService], (service: DadosCadastraisService) => {
    expect(service).toBeTruthy();
  }));
});
