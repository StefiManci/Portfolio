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
        console.log("Project 0 selected");
        this.ProjectTitle = "Personal Portfolio";
        this.BuildWith = "Angular, TypeScript, HTML, CSS";
        this.Purpose = "Showcase my skills and projects to potential employers.";
        this.Difficulties = "Designing a responsive layout and optimizing performance.";
        this.LessonsLearned = "Improved my front-end development skills and learned about responsive design.";
        this.Story = "Created a personal portfolio to highlight my work and experience in web development.";
        break;
      case 1:
        console.log("Project 1 selected");
         this.ProjectTitle = "E-commerce Website";
        this.BuildWith = "React, Node.js, Express, MongoDB";
        this.Purpose = "Provide a platform for users to buy and sell products online.";
        this.Difficulties = "Implementing secure payment processing and managing inventory.";
        this.LessonsLearned = "Gained experience in full-stack development and e-commerce solutions.";
        this.Story = "Developed an e-commerce website to facilitate online shopping and transactions.";
        break;
      case 2:
        console.log("Project 2 selected");
        this.ProjectTitle = "Social Media App";
        this.BuildWith = "Flutter, Dart, Firebase";
        this.Purpose = "Connect users and allow them to share content and interact.";
        this.Difficulties = "Building real-time features and ensuring data privacy.";
        this.LessonsLearned = "Learned about mobile app development and real-time databases.";
        this.Story = "Created a social media app to enable users to connect and share experiences.";
        break;
      case 3:
        console.log("Project 3 selected");
        this.ProjectTitle = "Task Management Tool";
        this.BuildWith = "Vue.js, Vuex, Vuetify";
        this.Purpose = "Help users organize and manage their tasks efficiently.";
        this.Difficulties = "Designing an intuitive user interface and implementing drag-and-drop functionality.";
        this.LessonsLearned = "Enhanced my skills in Vue.js and state management.";
        this.Story = "Built a task management tool to assist users in staying organized and productive.";
        break;
      default:
        console.log("Unknown project");
    }
  }
}
