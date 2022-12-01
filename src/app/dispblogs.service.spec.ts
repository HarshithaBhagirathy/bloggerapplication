import { TestBed } from '@angular/core/testing';

import { DispblogsService } from './dispblogs.service';

describe('DispblogsService', () => {
  let service: DispblogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispblogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
