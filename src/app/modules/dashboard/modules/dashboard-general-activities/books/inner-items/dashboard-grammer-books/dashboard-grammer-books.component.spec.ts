import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrammerBooksComponent } from './dashboard-grammer-books.component';

describe('DashboardGrammerBooksComponent', () => {
  let component: DashboardGrammerBooksComponent;
  let fixture: ComponentFixture<DashboardGrammerBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGrammerBooksComponent]
    });
    fixture = TestBed.createComponent(DashboardGrammerBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
