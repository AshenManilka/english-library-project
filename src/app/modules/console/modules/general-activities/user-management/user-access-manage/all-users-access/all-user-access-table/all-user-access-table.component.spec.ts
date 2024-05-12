import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserAccessTableComponent } from './all-user-access-table.component';

describe('AllUserAccessTableComponent', () => {
  let component: AllUserAccessTableComponent;
  let fixture: ComponentFixture<AllUserAccessTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUserAccessTableComponent]
    });
    fixture = TestBed.createComponent(AllUserAccessTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
