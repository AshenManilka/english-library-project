import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContextComponent } from './home-page-context.component';

describe('HomePageContextComponent', () => {
  let component: HomePageContextComponent;
  let fixture: ComponentFixture<HomePageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageContextComponent]
    });
    fixture = TestBed.createComponent(HomePageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
