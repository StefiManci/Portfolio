import { Component, SimpleChanges } from '@angular/core';
import { Footer } from "../../Shared/footer/footer";
import { Work } from "../../Home/work/work";
import { ProjectDetails } from "../project-details/project-details";

@Component({
  selector: 'app-projects',
  imports: [Footer, Work, ProjectDetails],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projectNumber :number = 0;

  ngOnInit() {
    this.logProject(this.projectNumber);
  }

  onProjectChange(event: number): void {
    this.projectNumber = event;
    this.logProject(this.projectNumber);
  }

  ProjectTitle: string = "";
  Duration: string = "";
  BuildWith: string = "";
  Purpose: string = "";
  Difficulties: string = "";
  LessonsLearned: string = "";
  Story: string = "";
  Progress : number = 0;


  logProject(project: number) {
    switch (project) {
      case 0:
        this.ProjectTitle = "Music Store";
        this.BuildWith = "Asp.Net (MVC), Bootstrap , Microsoft SQL Server";
        this.Purpose = "Final test for my Intenship-Journey.A project to showcase my learning and my skills!";
        this.Difficulties = "This was my first project so i had a lot of road-blocks.Without experience some things took a lot of time and they were not perfect at the and!";
        this.Duration = "2 Months"
        this.LessonsLearned = "Improved my back-end development skills and learned practical skills while working with .Net !";
        this.Story = "After finishing my internship learning programme i had to put the knowledge i gained in test.This is my first project as a developer!";
        break;
      case 1:
        this.ProjectTitle = "Cine Play";
        this.BuildWith = "React, Node.js, Express, MySql";
        this.Purpose = "Cine Play is a dynamic movie platform that allows users to stream films, leave reviews, and securely make payments — providing an engaging and seamless entertainment experience.";
        this.Duration = "2.5 Months"
        this.Difficulties = "Implementing secure and reliable payment processing.Managing complex movie inventory and user interactions efficiently.";
        this.LessonsLearned = "Enhanced full-stack development skills, especially in building scalable systems and integrating e-commerce-style payment solutions.";
        this.Story = "Cine Play started as an idea to blend entertainment with commerce — a space where users can not only enjoy watching movies but also interact, review, and support the platform through seamless transactions. The project evolved into a complete full-stack solution that strengthened both backend and frontend development expertise.";
        break;
      case 2:
        this.ProjectTitle = "Test Portfolio";
        this.BuildWith = "React,FramerMotion";
        this.Purpose = "Test Portfolio was my first React project, created right after completing several online courses. The main goal was to apply my newly gained knowledge in a practical way and strengthen my hands-on development experience!";
        this.Difficulties = "Implementing real-time features with smooth performance.";
        this.LessonsLearned = "Gained valuable insight into front-end architecture, animation using Framer Motion, and the fundamentals of real-time application development.";
        this.Story = "This project began as a learning experiment and evolved into a fully functional social media-style app that allows users to connect and share experiences. It became a major milestone in my journey toward becoming a proficient React developer.";
        break;
      case 3:
        this.ProjectTitle = "Portfolio";
        this.BuildWith = "Angular";
        this.Purpose = "This Portfolio is my first project built with Angular — a personal website designed to showcase who I am, what I’ve learned, and the projects I’ve created. It reflects my journey as a developer and serves as a space to present my skills, experience, and creative approach.";
        this.Difficulties = "Crafting an intuitive, responsive user interface.Implementing smooth animations and interactive drag-and-drop elements.";
        this.LessonsLearned = "Deepened my understanding of Angular’s component-based structure, routing, and state management while improving my front-end design and UI/UX practices.";
        this.Story = "This project started as an experiment to explore Angular but grew into a full personal portfolio website. It became the perfect way to express my identity as a developer — combining technical skill with creative presentation.";
        break;
      default:
        console.log("Unknown project");
    }
  }
}
