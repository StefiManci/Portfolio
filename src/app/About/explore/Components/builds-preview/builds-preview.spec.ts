import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsPreview } from './builds-preview';

describe('BuildsPreview', () => {
  let component: BuildsPreview;
  let fixture: ComponentFixture<BuildsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildsPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildsPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
