import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserAccessComponent } from './new-user-access.component';

describe('NewUserAccessComponent', () => {
  let component: NewUserAccessComponent;
  let fixture: ComponentFixture<NewUserAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserAccessComponent]
    });
    fixture = TestBed.createComponent(NewUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
