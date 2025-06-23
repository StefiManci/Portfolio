import { Component } from '@angular/core';
import { LandingSection } from "./landing-section/landing-section";
import { QuickPresentation } from "./quick-presentation/quick-presentation";
import { Work } from "./work/work";
import { SkillsPreview } from "./skills-preview/skills-preview";
import { AboutPreview } from "./about-preview/about-preview";
import { Footer } from "../Shared/footer/footer";

@Component({
  selector: 'app-home',
  imports: [LandingSection, QuickPresentation, Work, SkillsPreview, AboutPreview, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
