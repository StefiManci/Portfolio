import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-preview-info',
  imports: [],
  templateUrl: './project-preview-info.html',
  styleUrl: './project-preview-info.css'
})
export class ProjectPreviewInfo {

  @Input({required:true}) projectNumber: number=0;
}
