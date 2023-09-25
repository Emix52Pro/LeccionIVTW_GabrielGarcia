import { TestBed } from '@angular/core/testing';

import { FranquiciaserviceService } from './franquiciaservice.service';

describe('FranquiciaserviceService', () => {
  let service: FranquiciaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranquiciaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
