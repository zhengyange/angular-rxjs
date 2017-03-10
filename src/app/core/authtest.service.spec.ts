import { TestBed, inject } from '@angular/core/testing';

import { AuthtestService } from './authtest.service';

describe('AuthtestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthtestService]
    });
  });

  it('should ...', inject([AuthtestService], (service: AuthtestService) => {
    expect(service).toBeTruthy();
  }));
});
