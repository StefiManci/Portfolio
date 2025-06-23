import { Component } from '@angular/core';
import { Navigation } from "./Shared/navigation/navigation";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navigation, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Portfolio';
}
