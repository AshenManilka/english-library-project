import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderTopBarComponent } from './main-header-top-bar.component';

describe('MainHeaderTopBarComponent', () => {
  let component: MainHeaderTopBarComponent;
  let fixture: ComponentFixture<MainHeaderTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHeaderTopBarComponent]
    });
    fixture = TestBed.createComponent(MainHeaderTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
