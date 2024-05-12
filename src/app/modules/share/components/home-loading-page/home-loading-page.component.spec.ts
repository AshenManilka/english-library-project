import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoadingPageComponent } from './home-loading-page.component';

describe('HomeLoadingPageComponent', () => {
  let component: HomeLoadingPageComponent;
  let fixture: ComponentFixture<HomeLoadingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLoadingPageComponent]
    });
    fixture = TestBed.createComponent(HomeLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
