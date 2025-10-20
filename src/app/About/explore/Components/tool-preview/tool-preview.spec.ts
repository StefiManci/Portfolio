import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolPreview } from './tool-preview';

describe('ToolPreview', () => {
  let component: ToolPreview;
  let fixture: ComponentFixture<ToolPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
