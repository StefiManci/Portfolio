import { Component } from '@angular/core';
import { ProjectPreview } from "./project-preview/project-preview";
import { ProjectPreviewInfo } from "./project-preview-info/project-preview-info";

@Component({
  selector: 'app-work',
  imports: [ProjectPreview, ProjectPreviewInfo],
  templateUrl: './work.html',
  styleUrl: './work.css'
})
export class Work {

  isDisplaying :number = 0;

  onClick(event: Event): void {
    
    if(this.isDisplaying>=0 && this.isDisplaying<3) {
      this.isDisplaying++;
    }else{
      this.isDisplaying = 0;
    }
    console.log(this.isDisplaying);
  }
}
