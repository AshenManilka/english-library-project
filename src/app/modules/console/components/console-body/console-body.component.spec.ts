import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleBodyComponent } from './console-body.component';

describe('ConsoleBodyComponent', () => {
  let component: ConsoleBodyComponent;
  let fixture: ComponentFixture<ConsoleBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleBodyComponent]
    });
    fixture = TestBed.createComponent(ConsoleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
