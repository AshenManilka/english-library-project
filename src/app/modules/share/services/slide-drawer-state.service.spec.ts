import { TestBed } from '@angular/core/testing';

import { SlideDrawerStateService } from './slide-drawer-state.service';

describe('SlideDrawerStateService', () => {
  let service: SlideDrawerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideDrawerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
