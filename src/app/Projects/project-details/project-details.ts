import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css'
})
export class ProjectDetails {

  @Input() project :number = 0;

  @Input() ProjectTitle: string = "";
  @Input() Duration: string = "";
  @Input() BuildWith: string = "";
  @Input() Purpose: string = "";
  @Input() Difficulties: string = "";
  @Input() LessonsLearned: string = "";
  @Input() Story: string = "";
  @Input() Progress : number = 0;

  ngOnInit() {
    console.log("Project Details Initialized");
    console.log(this.project);
  }
}
