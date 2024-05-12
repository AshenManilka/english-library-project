import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralActivitiesContextComponent } from './general-activities-context.component';

describe('GeneralActivitiesContextComponent', () => {
  let component: GeneralActivitiesContextComponent;
  let fixture: ComponentFixture<GeneralActivitiesContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralActivitiesContextComponent]
    });
    fixture = TestBed.createComponent(GeneralActivitiesContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
