import { Component } from '@angular/core';
import { SelfPresentation } from "../self-presentation/self-presentation";
import { Experience } from "../experience/experience";
import { Explore } from "../explore/explore";
import { Footer } from "../../Shared/footer/footer";

@Component({
  selector: 'app-about',
  imports: [SelfPresentation, Experience, Explore, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
