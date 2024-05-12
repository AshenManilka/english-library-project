import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBookManagementComponent } from './dashboard-book-management.component';

describe('DashboardBookManagementComponent', () => {
  let component: DashboardBookManagementComponent;
  let fixture: ComponentFixture<DashboardBookManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardBookManagementComponent]
    });
    fixture = TestBed.createComponent(DashboardBookManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
