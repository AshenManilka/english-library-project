import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoguesBooksComponent } from './dialogues-books.component';

describe('DialoguesBooksComponent', () => {
  let component: DialoguesBooksComponent;
  let fixture: ComponentFixture<DialoguesBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialoguesBooksComponent]
    });
    fixture = TestBed.createComponent(DialoguesBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
