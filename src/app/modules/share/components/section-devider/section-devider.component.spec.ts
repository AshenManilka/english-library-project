import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDeviderComponent } from './section-devider.component';

describe('SectionDeviderComponent', () => {
  let component: SectionDeviderComponent;
  let fixture: ComponentFixture<SectionDeviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionDeviderComponent]
    });
    fixture = TestBed.createComponent(SectionDeviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
