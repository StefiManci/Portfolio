import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProgressPreview } from './work-in-progress-preview';

describe('WorkInProgressPreview', () => {
  let component: WorkInProgressPreview;
  let fixture: ComponentFixture<WorkInProgressPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkInProgressPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInProgressPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
