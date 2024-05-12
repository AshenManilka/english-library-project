import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralActivitiesComponent } from './general-activities.component';

describe('GeneralActivitiesComponent', () => {
  let component: GeneralActivitiesComponent;
  let fixture: ComponentFixture<GeneralActivitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralActivitiesComponent]
    });
    fixture = TestBed.createComponent(GeneralActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
