import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVideosTableComponent } from './all-videos-table.component';

describe('AllVideosTableComponent', () => {
  let component: AllVideosTableComponent;
  let fixture: ComponentFixture<AllVideosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllVideosTableComponent]
    });
    fixture = TestBed.createComponent(AllVideosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
