import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContextComponent } from './login-context.component';

describe('LoginContextComponent', () => {
  let component: LoginContextComponent;
  let fixture: ComponentFixture<LoginContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginContextComponent]
    });
    fixture = TestBed.createComponent(LoginContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
