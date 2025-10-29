import { Component } from '@angular/core';
import { ToolPreview } from "./Components/tool-preview/tool-preview";
import { Router } from '@angular/router';
import { BuildsPreview } from "./Components/builds-preview/builds-preview";
import { WorkInProgressPreview } from "./Components/work-in-progress-preview/work-in-progress-preview";

@Component({
  selector: 'app-explore',
  imports: [ToolPreview, BuildsPreview, WorkInProgressPreview],
  templateUrl: './explore.html',
  styleUrl: './explore.css'
})
export class Explore {

  constructor(private router: Router) {}

  isMouseOver: boolean = false;

  navigateOnClick(url: string , fragment?: string) {
    this.router.navigate([url], { fragment });
  }

  onMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('shadow-green-400');
    this.isMouseOver = true;
  }

  onMouseLeave(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('shadow-green-400');
    this.isMouseOver = false;
  }

}
