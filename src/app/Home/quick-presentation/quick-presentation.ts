import { Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-quick-presentation',
  imports: [],
  templateUrl: './quick-presentation.html',
  styleUrl: './quick-presentation.css'
})
export class QuickPresentation implements OnInit {


  isWideScreen: boolean = false;

@HostListener('window:resize')
onResize() {
  this.checkScreenWidth();
}

ngOnInit() {
  this.checkScreenWidth();
}

checkScreenWidth() {
  this.isWideScreen = window.innerWidth <= 767 && window.innerWidth >= 640;
}
  isHovered: boolean = false;

  email:string ="stefi.manci1@gmail.com"
  copied:boolean = false;

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
}
}
