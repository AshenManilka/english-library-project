import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFreeVideosComponent } from './dashboard-free-videos.component';

describe('DashboardFreeVideosComponent', () => {
  let component: DashboardFreeVideosComponent;
  let fixture: ComponentFixture<DashboardFreeVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFreeVideosComponent]
    });
    fixture = TestBed.createComponent(DashboardFreeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
