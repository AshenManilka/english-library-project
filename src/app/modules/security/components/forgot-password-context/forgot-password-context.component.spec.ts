import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordContextComponent } from './forgot-password-context.component';

describe('ForgotPasswordContextComponent', () => {
  let component: ForgotPasswordContextComponent;
  let fixture: ComponentFixture<ForgotPasswordContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordContextComponent]
    });
    fixture = TestBed.createComponent(ForgotPasswordContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
