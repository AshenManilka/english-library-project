import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBookCategoryMenuComponent } from './home-page-book-category-menu.component';

describe('HomePageBookCategoryMenuComponent', () => {
  let component: HomePageBookCategoryMenuComponent;
  let fixture: ComponentFixture<HomePageBookCategoryMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageBookCategoryMenuComponent]
    });
    fixture = TestBed.createComponent(HomePageBookCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
