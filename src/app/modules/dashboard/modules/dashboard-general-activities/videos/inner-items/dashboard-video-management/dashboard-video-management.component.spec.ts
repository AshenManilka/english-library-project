import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVideoManagementComponent } from './dashboard-video-management.component';

describe('DashboardVideoManagementComponent', () => {
  let component: DashboardVideoManagementComponent;
  let fixture: ComponentFixture<DashboardVideoManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardVideoManagementComponent]
    });
    fixture = TestBed.createComponent(DashboardVideoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
