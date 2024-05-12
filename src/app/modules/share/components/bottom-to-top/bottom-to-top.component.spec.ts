import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomToTopComponent } from './bottom-to-top.component';

describe('BottomToTopComponent', () => {
  let component: BottomToTopComponent;
  let fixture: ComponentFixture<BottomToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomToTopComponent]
    });
    fixture = TestBed.createComponent(BottomToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
