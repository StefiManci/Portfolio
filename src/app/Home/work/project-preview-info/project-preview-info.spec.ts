import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewInfo } from './project-preview-info';

describe('ProjectPreviewInfo', () => {
  let component: ProjectPreviewInfo;
  let fixture: ComponentFixture<ProjectPreviewInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPreviewInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPreviewInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
