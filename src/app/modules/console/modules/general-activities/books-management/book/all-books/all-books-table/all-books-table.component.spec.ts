import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksTableComponent } from './all-books-table.component';

describe('AllBooksTableComponent', () => {
  let component: AllBooksTableComponent;
  let fixture: ComponentFixture<AllBooksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBooksTableComponent]
    });
    fixture = TestBed.createComponent(AllBooksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
