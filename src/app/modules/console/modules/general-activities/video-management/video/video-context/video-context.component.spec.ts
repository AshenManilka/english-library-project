import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContextComponent } from './video-context.component';

describe('VideoContextComponent', () => {
  let component: VideoContextComponent;
  let fixture: ComponentFixture<VideoContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoContextComponent]
    });
    fixture = TestBed.createComponent(VideoContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
