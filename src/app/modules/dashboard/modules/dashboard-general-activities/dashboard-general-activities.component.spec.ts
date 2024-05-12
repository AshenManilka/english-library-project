import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeneralActivitiesComponent } from './dashboard-general-activities.component';

describe('DashboardGeneralActivitiesComponent', () => {
  let component: DashboardGeneralActivitiesComponent;
  let fixture: ComponentFixture<DashboardGeneralActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGeneralActivitiesComponent]
    });
    fixture = TestBed.createComponent(DashboardGeneralActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
