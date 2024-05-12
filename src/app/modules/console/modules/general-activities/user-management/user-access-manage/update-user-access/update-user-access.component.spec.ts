import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserAccessComponent } from './update-user-access.component';

describe('UpdateUserAccessComponent', () => {
  let component: UpdateUserAccessComponent;
  let fixture: ComponentFixture<UpdateUserAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserAccessComponent]
    });
    fixture = TestBed.createComponent(UpdateUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
