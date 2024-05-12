import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendEmailVerificationContextComponent } from './resend-email-verification-context.component';

describe('ResendEmailVerificationContextComponent', () => {
  let component: ResendEmailVerificationContextComponent;
  let fixture: ComponentFixture<ResendEmailVerificationContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResendEmailVerificationContextComponent]
    });
    fixture = TestBed.createComponent(ResendEmailVerificationContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
