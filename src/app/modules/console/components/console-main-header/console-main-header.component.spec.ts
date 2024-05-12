import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleMainHeaderComponent } from './console-main-header.component';

describe('ConsoleMainHeaderComponent', () => {
  let component: ConsoleMainHeaderComponent;
  let fixture: ComponentFixture<ConsoleMainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleMainHeaderComponent]
    });
    fixture = TestBed.createComponent(ConsoleMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
