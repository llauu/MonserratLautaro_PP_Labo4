import { TestBed } from '@angular/core/testing';

import { DniRepartidorService } from './dni-repartidor.service';

describe('DniRepartidorService', () => {
  let service: DniRepartidorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DniRepartidorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
