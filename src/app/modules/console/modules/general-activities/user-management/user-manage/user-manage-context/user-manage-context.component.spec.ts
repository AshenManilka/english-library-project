import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageContextComponent } from './user-manage-context.component';

describe('UserManageContextComponent', () => {
  let component: UserManageContextComponent;
  let fixture: ComponentFixture<UserManageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManageContextComponent]
    });
    fixture = TestBed.createComponent(UserManageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
