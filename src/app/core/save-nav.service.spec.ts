import { TestBed } from '@angular/core/testing';

import { SaveNavService } from './save-nav.service';

describe('SaveNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveNavService = TestBed.get(SaveNavService);
    expect(service).toBeTruthy();
  });
});
