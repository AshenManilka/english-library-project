import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPatternsVideosComponent } from './dashboard-patterns-videos.component';

describe('DashboardPatternsVideosComponent', () => {
  let component: DashboardPatternsVideosComponent;
  let fixture: ComponentFixture<DashboardPatternsVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPatternsVideosComponent]
    });
    fixture = TestBed.createComponent(DashboardPatternsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
