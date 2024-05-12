import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksContextComponent } from './all-books-context.component';

describe('AllBooksContextComponent', () => {
  let component: AllBooksContextComponent;
  let fixture: ComponentFixture<AllBooksContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBooksContextComponent]
    });
    fixture = TestBed.createComponent(AllBooksContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
