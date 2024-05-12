import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksContextComponent } from './books-context.component';

describe('BooksContextComponent', () => {
  let component: BooksContextComponent;
  let fixture: ComponentFixture<BooksContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksContextComponent]
    });
    fixture = TestBed.createComponent(BooksContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
