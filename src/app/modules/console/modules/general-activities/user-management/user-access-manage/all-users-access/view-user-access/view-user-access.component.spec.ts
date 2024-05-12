import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAccessComponent } from './view-user-access.component';

describe('ViewUserAccessComponent', () => {
  let component: ViewUserAccessComponent;
  let fixture: ComponentFixture<ViewUserAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserAccessComponent]
    });
    fixture = TestBed.createComponent(ViewUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
