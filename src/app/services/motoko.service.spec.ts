import { TestBed } from '@angular/core/testing';

import { MotokoService } from './motoko.service';

describe('MotokoService', () => {
  let service: MotokoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotokoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
