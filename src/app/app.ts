import { Component } from '@angular/core';
import { Navigation } from "./navigation/navigation";
import { LandingSection } from "./landing-section/landing-section";
import { RouterModule } from '@angular/router';
import { QuickPresentation } from "./quick-presentation/quick-presentation";
import { Work } from "./work/work";
import { SkillsPreview } from "./skills-preview/skills-preview";
import { AboutPreview } from "./about-preview/about-preview";
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [Navigation, RouterModule, LandingSection, QuickPresentation, Work, SkillsPreview, AboutPreview, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}
