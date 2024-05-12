import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrammarVideosComponent } from './dashboard-grammar-videos.component';

describe('DashboardGrammarVideosComponent', () => {
  let component: DashboardGrammarVideosComponent;
  let fixture: ComponentFixture<DashboardGrammarVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardGrammarVideosComponent]
    });
    fixture = TestBed.createComponent(DashboardGrammarVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
