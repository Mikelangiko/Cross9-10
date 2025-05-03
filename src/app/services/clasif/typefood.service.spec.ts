import { TestBed } from '@angular/core/testing';

import { ConfigService } from './typefood.service';

describe('TypefoodService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
