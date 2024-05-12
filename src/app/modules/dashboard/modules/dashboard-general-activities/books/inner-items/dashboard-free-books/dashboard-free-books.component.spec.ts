import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFreeBooksComponent } from './dashboard-free-books.component';

describe('DashboardFreeBooksComponent', () => {
  let component: DashboardFreeBooksComponent;
  let fixture: ComponentFixture<DashboardFreeBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFreeBooksComponent]
    });
    fixture = TestBed.createComponent(DashboardFreeBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
