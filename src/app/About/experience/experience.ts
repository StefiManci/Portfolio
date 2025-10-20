import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
 
   scrollProgress = 0;

  @ViewChild('box3') box3!: ElementRef;

  boxTop = 0;
  boxHeight = 0;

  ngAfterViewInit() {
    const box = this.box3.nativeElement as HTMLElement;
    this.boxTop = box.offsetTop;
    this.boxHeight = box.offsetHeight;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY + window.innerHeight / 2; 
    if (scrollY < this.boxTop) {
      this.scrollProgress = 0;
    } else if (scrollY > this.boxTop + this.boxHeight) {
      this.scrollProgress = 100;
    } else {
      this.scrollProgress = ((scrollY - this.boxTop) / this.boxHeight) * 100;
    }
  }
}
