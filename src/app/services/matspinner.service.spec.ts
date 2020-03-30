import { TestBed } from '@angular/core/testing';

import { MatspinnerService } from './matspinner.service';

describe('MatspinnerService', () => {
  let service: MatspinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatspinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
