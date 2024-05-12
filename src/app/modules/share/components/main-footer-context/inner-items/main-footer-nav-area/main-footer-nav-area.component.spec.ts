import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFooterNavAreaComponent } from './main-footer-nav-area.component';

describe('MainFooterNavAreaComponent', () => {
  let component: MainFooterNavAreaComponent;
  let fixture: ComponentFixture<MainFooterNavAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFooterNavAreaComponent]
    });
    fixture = TestBed.createComponent(MainFooterNavAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
