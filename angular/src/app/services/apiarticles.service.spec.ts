import { TestBed } from '@angular/core/testing';

import { ApiarticlesService } from './apiarticles.service';

describe('ApiarticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiarticlesService = TestBed.get(ApiarticlesService);
    expect(service).toBeTruthy();
  });
});
