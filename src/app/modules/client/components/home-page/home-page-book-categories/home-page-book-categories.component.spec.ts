import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBookCategoriesComponent } from './home-page-book-categories.component';

describe('HomePageBookCategoriesComponent', () => {
  let component: HomePageBookCategoriesComponent;
  let fixture: ComponentFixture<HomePageBookCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageBookCategoriesComponent]
    });
    fixture = TestBed.createComponent(HomePageBookCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
