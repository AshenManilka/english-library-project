import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSentencePatternsBooksComponent } from './dashboard-sentence-patterns-books.component';

describe('DashboardSentencePatternsBooksComponent', () => {
  let component: DashboardSentencePatternsBooksComponent;
  let fixture: ComponentFixture<DashboardSentencePatternsBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSentencePatternsBooksComponent]
    });
    fixture = TestBed.createComponent(DashboardSentencePatternsBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
