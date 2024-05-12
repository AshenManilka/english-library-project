import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersAccessComponent } from './all-users-access.component';

describe('AllUsersAccessComponent', () => {
  let component: AllUsersAccessComponent;
  let fixture: ComponentFixture<AllUsersAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUsersAccessComponent]
    });
    fixture = TestBed.createComponent(AllUsersAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
