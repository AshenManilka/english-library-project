import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePlaygroundComponent } from './console-playground.component';

describe('ConsolePlaygroundComponent', () => {
  let component: ConsolePlaygroundComponent;
  let fixture: ComponentFixture<ConsolePlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsolePlaygroundComponent]
    });
    fixture = TestBed.createComponent(ConsolePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
