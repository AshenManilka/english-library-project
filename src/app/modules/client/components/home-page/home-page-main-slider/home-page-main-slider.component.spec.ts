import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMainSliderComponent } from './home-page-main-slider.component';

describe('HomePageMainSliderComponent', () => {
  let component: HomePageMainSliderComponent;
  let fixture: ComponentFixture<HomePageMainSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageMainSliderComponent]
    });
    fixture = TestBed.createComponent(HomePageMainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
