import { Component, HostListener } from '@angular/core';
import { Navigation } from "./Shared/navigation/navigation";
import { RouterModule } from '@angular/router';
import { Landscape } from "./Shared/landscape/landscape";

@Component({
  selector: 'app-root',
  imports: [Navigation, RouterModule, Landscape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';

  isLandscape = window.innerHeight < 450;


  @HostListener('window:resize')
  onResize() {
    this.isLandscape = window.innerHeight < 450;
  }

}
