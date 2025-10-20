import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-preview',
  imports: [],
  templateUrl: './tool-preview.html',
  styleUrl: './tool-preview.css'
})
export class ToolPreview {

  @Input() isMouseOver: boolean = false;
  @Input() onMouseEnter!: (event: MouseEvent) => void;
  @Input() onMouseLeave!: (event: MouseEvent) => void;
}
