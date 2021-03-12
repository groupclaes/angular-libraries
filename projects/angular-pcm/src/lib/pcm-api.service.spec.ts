import { TestBed } from '@angular/core/testing';

import { PcmApiService } from './pcm-api.service';

describe('PcmApiService', () => {
  let service: PcmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
