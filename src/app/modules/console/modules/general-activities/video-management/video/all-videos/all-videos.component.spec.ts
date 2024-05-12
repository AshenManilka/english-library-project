import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVideosComponent } from './all-videos.component';

describe('AllVideosComponent', () => {
  let component: AllVideosComponent;
  let fixture: ComponentFixture<AllVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllVideosComponent]
    });
    fixture = TestBed.createComponent(AllVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
