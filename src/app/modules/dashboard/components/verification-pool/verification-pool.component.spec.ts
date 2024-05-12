import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationPoolComponent } from './verification-pool.component';

describe('VerificationPoolComponent', () => {
  let component: VerificationPoolComponent;
  let fixture: ComponentFixture<VerificationPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationPoolComponent]
    });
    fixture = TestBed.createComponent(VerificationPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
