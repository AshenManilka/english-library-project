import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleVerificationPoolComponent } from './console-verification-pool.component';

describe('ConsoleVerificationPoolComponent', () => {
  let component: ConsoleVerificationPoolComponent;
  let fixture: ComponentFixture<ConsoleVerificationPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleVerificationPoolComponent]
    });
    fixture = TestBed.createComponent(ConsoleVerificationPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
