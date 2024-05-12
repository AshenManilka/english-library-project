import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageReviewsComponent } from './home-page-reviews.component';

describe('HomePageReviewsComponent', () => {
  let component: HomePageReviewsComponent;
  let fixture: ComponentFixture<HomePageReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageReviewsComponent]
    });
    fixture = TestBed.createComponent(HomePageReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
