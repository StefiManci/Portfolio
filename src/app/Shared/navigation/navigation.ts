import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {

  isDropdownOpen = false;
private closeTimeout: any;

onMouseEnter() {
  clearTimeout(this.closeTimeout);
  this.isDropdownOpen = true;
}

onMouseLeave() {
  this.closeTimeout = setTimeout(() => {
    this.isDropdownOpen = false;
  }, 400); // Adjust delay as needed (e.g., 400ms)
}

}
