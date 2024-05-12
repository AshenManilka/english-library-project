import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessManageContextComponent } from './user-access-manage-context.component';

describe('UserAccessManageContextComponent', () => {
  let component: UserAccessManageContextComponent;
  let fixture: ComponentFixture<UserAccessManageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAccessManageContextComponent]
    });
    fixture = TestBed.createComponent(UserAccessManageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
