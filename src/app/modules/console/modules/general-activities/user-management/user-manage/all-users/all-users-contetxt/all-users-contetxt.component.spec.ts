import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersContetxtComponent } from './all-users-contetxt.component';

describe('AllUsersContetxtComponent', () => {
  let component: AllUsersContetxtComponent;
  let fixture: ComponentFixture<AllUsersContetxtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUsersContetxtComponent]
    });
    fixture = TestBed.createComponent(AllUsersContetxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
