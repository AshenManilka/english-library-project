import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageContextComponent } from './about-us-page-context.component';

describe('AboutUsPageContextComponent', () => {
  let component: AboutUsPageContextComponent;
  let fixture: ComponentFixture<AboutUsPageContextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPageContextComponent]
    });
    fixture = TestBed.createComponent(AboutUsPageContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
