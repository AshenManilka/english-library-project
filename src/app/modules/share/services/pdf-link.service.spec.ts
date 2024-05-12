import { TestBed } from '@angular/core/testing';

import { PdfLinkService } from './pdf-link.service';

describe('PdfLinkService', () => {
  let service: PdfLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
