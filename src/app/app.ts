import { Component } from '@angular/core';
import { Navigation } from "./navigation/navigation";
import { LandingSection } from "./landing-section/landing-section";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Navigation, RouterModule, LandingSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}
