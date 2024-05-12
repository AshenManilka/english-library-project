import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDialoguesBooksComponent } from './dashboard-dialogues-books.component';

describe('DashboardDialoguesBooksComponent', () => {
  let component: DashboardDialoguesBooksComponent;
  let fixture: ComponentFixture<DashboardDialoguesBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDialoguesBooksComponent]
    });
    fixture = TestBed.createComponent(DashboardDialoguesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
