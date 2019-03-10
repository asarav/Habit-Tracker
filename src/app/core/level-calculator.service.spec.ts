import { TestBed } from '@angular/core/testing';

import { LevelCalculatorService } from './level-calculator.service';

describe('LevelCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevelCalculatorService = TestBed.get(LevelCalculatorService);
    expect(service).toBeTruthy();
  });
});
