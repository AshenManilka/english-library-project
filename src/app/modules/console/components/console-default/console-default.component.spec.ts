import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleDefaultComponent } from './console-default.component';

describe('ConsoleDefaultComponent', () => {
  let component: ConsoleDefaultComponent;
  let fixture: ComponentFixture<ConsoleDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleDefaultComponent]
    });
    fixture = TestBed.createComponent(ConsoleDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
