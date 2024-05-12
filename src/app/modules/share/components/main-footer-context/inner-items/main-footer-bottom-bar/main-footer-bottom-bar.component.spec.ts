import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFooterBottomBarComponent } from './main-footer-bottom-bar.component';

describe('MainFooterBottomBarComponent', () => {
  let component: MainFooterBottomBarComponent;
  let fixture: ComponentFixture<MainFooterBottomBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFooterBottomBarComponent]
    });
    fixture = TestBed.createComponent(MainFooterBottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
