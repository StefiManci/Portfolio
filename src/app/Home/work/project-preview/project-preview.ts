import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-preview',
  imports: [],
  templateUrl: './project-preview.html',
  styleUrl: './project-preview.css'
})
export class ProjectPreview {

  @Input() projectNumber: number=0;
}
