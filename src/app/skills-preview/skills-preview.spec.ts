import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPreview } from './skills-preview';

describe('SkillsPreview', () => {
  let component: SkillsPreview;
  let fixture: ComponentFixture<SkillsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
