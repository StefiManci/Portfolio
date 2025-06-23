import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPresentation } from './quick-presentation';

describe('QuickPresentation', () => {
  let component: QuickPresentation;
  let fixture: ComponentFixture<QuickPresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickPresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
