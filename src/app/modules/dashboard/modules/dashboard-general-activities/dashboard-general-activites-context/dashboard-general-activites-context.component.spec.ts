import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGeneralActivitesContextComponent } from './dashboard-general-activites-context.component';

describe('DashboardGeneralActivitesContextComponent', () => {
  let component: DashboardGeneralActivitesContextComponent;
  let fixture: ComponentFixture<DashboardGeneralActivitesContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGeneralActivitesContextComponent]
    });
    fixture = TestBed.createComponent(DashboardGeneralActivitesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
