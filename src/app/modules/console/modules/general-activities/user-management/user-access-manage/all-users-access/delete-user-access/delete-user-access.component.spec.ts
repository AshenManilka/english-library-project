import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserAccessComponent } from './delete-user-access.component';

describe('DeleteUserAccessComponent', () => {
  let component: DeleteUserAccessComponent;
  let fixture: ComponentFixture<DeleteUserAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUserAccessComponent]
    });
    fixture = TestBed.createComponent(DeleteUserAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
