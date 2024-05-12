import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentencePatternsBooksComponent } from './sentence-patterns-books.component';

describe('SentencePatternsBooksComponent', () => {
  let component: SentencePatternsBooksComponent;
  let fixture: ComponentFixture<SentencePatternsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentencePatternsBooksComponent]
    });
    fixture = TestBed.createComponent(SentencePatternsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
