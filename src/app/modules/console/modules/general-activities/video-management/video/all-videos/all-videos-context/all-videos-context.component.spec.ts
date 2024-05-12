import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVideosContextComponent } from './all-videos-context.component';

describe('AllVideosContextComponent', () => {
  let component: AllVideosContextComponent;
  let fixture: ComponentFixture<AllVideosContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllVideosContextComponent]
    });
    fixture = TestBed.createComponent(AllVideosContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
