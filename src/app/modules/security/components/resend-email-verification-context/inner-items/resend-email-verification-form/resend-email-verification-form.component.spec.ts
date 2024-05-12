import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendEmailVerificationFormComponent } from './resend-email-verification-form.component';

describe('ResendEmailVerificationFormComponent', () => {
  let component: ResendEmailVerificationFormComponent;
  let fixture: ComponentFixture<ResendEmailVerificationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResendEmailVerificationFormComponent]
    });
    fixture = TestBed.createComponent(ResendEmailVerificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
