import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderContextComponent } from './main-header-context.component';

describe('MainHeaderContextComponent', () => {
  let component: MainHeaderContextComponent;
  let fixture: ComponentFixture<MainHeaderContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHeaderContextComponent]
    });
    fixture = TestBed.createComponent(MainHeaderContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
