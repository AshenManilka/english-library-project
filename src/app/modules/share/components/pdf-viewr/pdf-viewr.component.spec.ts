import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewrComponent } from './pdf-viewr.component';

describe('PdfViewrComponent', () => {
  let component: PdfViewrComponent;
  let fixture: ComponentFixture<PdfViewrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfViewrComponent]
    });
    fixture = TestBed.createComponent(PdfViewrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
