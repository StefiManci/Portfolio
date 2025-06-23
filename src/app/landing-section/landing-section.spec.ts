import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSection } from './landing-section';

describe('LandingSection', () => {
  let component: LandingSection;
  let fixture: ComponentFixture<LandingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
