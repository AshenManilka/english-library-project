import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDialogsVideosComponent } from './dashboard-dialogs-videos.component';

describe('DashboardDialogsVideosComponent', () => {
  let component: DashboardDialogsVideosComponent;
  let fixture: ComponentFixture<DashboardDialogsVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDialogsVideosComponent]
    });
    fixture = TestBed.createComponent(DashboardDialogsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
