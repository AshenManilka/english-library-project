import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserAccessContextComponent } from './all-user-access-context.component';

describe('AllUserAccessContextComponent', () => {
  let component: AllUserAccessContextComponent;
  let fixture: ComponentFixture<AllUserAccessContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUserAccessContextComponent]
    });
    fixture = TestBed.createComponent(AllUserAccessContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
