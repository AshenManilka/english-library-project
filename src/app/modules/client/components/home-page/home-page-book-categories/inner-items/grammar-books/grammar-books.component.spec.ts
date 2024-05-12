import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarBooksComponent } from './grammar-books.component';

describe('GrammarBooksComponent', () => {
  let component: GrammarBooksComponent;
  let fixture: ComponentFixture<GrammarBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrammarBooksComponent]
    });
    fixture = TestBed.createComponent(GrammarBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
