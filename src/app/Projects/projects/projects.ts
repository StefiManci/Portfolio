import { Component } from '@angular/core';
import { Footer } from "../../Shared/footer/footer";
import { Work } from "../../Home/work/work";

@Component({
  selector: 'app-projects',
  imports: [Footer, Work],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
