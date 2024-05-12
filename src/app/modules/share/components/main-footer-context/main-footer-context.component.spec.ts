import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFooterContextComponent } from './main-footer-context.component';

describe('MainFooterContextComponent', () => {
  let component: MainFooterContextComponent;
  let fixture: ComponentFixture<MainFooterContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFooterContextComponent]
    });
    fixture = TestBed.createComponent(MainFooterContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
