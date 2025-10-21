import { Component } from '@angular/core';

@Component({
  selector: 'app-builds-preview',
  imports: [],
  templateUrl: './builds-preview.html',
  styleUrl: './builds-preview.css'
})
export class BuildsPreview {

  titleWords: string[] = [
  "Hi there!Can i grab your attention for a moment?",
  'Thank You!',
  'I will show a preview of what I can build and love to do so!',
  'I build systems that are:',
  'User-friendly',
  'Scalable',
  'Robust',
  'Efficient',
  'Secure',
  'Intuitive',
  'Customizable',
  'Reliable'
 ];

 softwareWords: string[] = [
    "E-commerce Platform",
    "Customer Relationship Management System",
    "Financial Management System",
    "Portfolio or Personal Website",
    "SaaS Platform",
    "API Service",
    "Dashboard or Admin Panel",
    "Everything that i architect!",
    "Everything that i architect!"
  ];



  isShowRunning: boolean = false;
  currentWord: string = this.titleWords[0];

  seconds: number = 0;
  currentWordIndex: number = 0

  onMouseOver() {
    this.isShowRunning = true;
    const intervalId = setInterval(() => {
      if (this.isShowRunning == true) {
        this.currentWord = this.titleWords[this.currentWordIndex];
        this.seconds++;
        if (this.seconds % 2 === 0) {
        this.currentWordIndex++;
        console.log(this.currentWordIndex);
        if (this.currentWordIndex >= this.titleWords.length) {
          clearInterval(intervalId);
          this.currentWordIndex = 0;
          this.seconds = 0;
        }
      }
      }
      if (this.isShowRunning == false) {
        clearInterval(intervalId);
      }

    }, 1000);

    console.log(this.currentWordIndex);
  }

  onMouseOut() {
    this.isShowRunning = false;
  }
}
