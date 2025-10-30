import { Component } from '@angular/core';
import { Footer } from '../../Shared/footer/footer';

@Component({
  selector: 'app-skills',
  imports: [Footer],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

isDisplaying : string = "Technical"
chosenSkill : string = ""

//Description For Each Skill

description : string = "Choose & Explore"


setIsDisplaying(value : string){
 this.isDisplaying = value;

 this.description = "Choose & Explore";
 this.chosenSkill = ""
}
setChosenSkill(value : string){
  this.chosenSkill = value;

 switch (this.chosenSkill) {
  case 'ASP.NET':
    this.description = `
I have strong experience developing robust and scalable web applications using ASP.NET Core. 
I design and build RESTful APIs that follow clean architecture principles, incorporating 
middleware, dependency injection, and modular structure for maintainability. 
I also implement authentication and authorization using JWT and HTTP-only cookies to ensure secure user sessions. 
Database operations are handled via Entity Framework Core with LINQ, migrations, and repository patterns. 
I’m comfortable with integrating front-end frameworks like Angular or React with .NET APIs 
and deploying to cloud environments such as Azure or AWS.
    `;
    break;

  case 'Node.js + Express':
    this.description = `
I use Node.js with Express to build scalable and maintainable backends for web applications. 
My focus is on creating well-structured RESTful APIs that handle complex business logic efficiently. 
I follow enterprise-level folder structures, apply middleware for error handling and authentication, 
and use async/await for clean asynchronous code. 
I’ve integrated Node.js with both SQL (MySQL) and NoSQL (MongoDB) databases, implemented secure JWT authentication, 
and used third-party libraries like Multer for file uploads or Nodemailer for email handling. 
Performance, code reusability, and clean structure are always top priorities.
    `;
    break;

  case 'React':
    this.description = `
React is one of my main front-end frameworks for building fast, responsive, and interactive web applications. 
I focus on creating reusable functional components using hooks (useState, useEffect, useContext), 
and managing global state through Context API or Redux. 
My React apps are styled with Tailwind CSS, and I often use Framer Motion to add smooth, professional animations. 
I emphasize accessibility, performance optimization (lazy loading, memoization), and integration with REST APIs. 
I also follow clean folder structures and TypeScript typing for scalability and maintainability.
    `;
    break;

  case 'Angular':
    this.description = `
I develop full-featured, modular front-end applications using Angular. 
I work extensively with Angular components, services, directives, pipes, and routing modules. 
I leverage Reactive Forms for validation, observables for data streams, and RxJS for managing async operations. 
My approach follows a clean, maintainable architecture — separating logic between components and services. 
I integrate Angular applications with .NET and Node.js APIs and implement JWT-based authentication with guards and interceptors. 
Styling is often handled using Tailwind CSS, and I aim for responsive, pixel-perfect UIs.
    `;
    break;

  case 'React Native':
    this.description = `
I have experience developing cross-platform mobile applications with React Native, 
leveraging my React expertise to build performant apps for both Android and iOS. 
I design responsive layouts that adapt to multiple screen sizes, 
integrate with REST APIs or Firebase for real-time data, and manage navigation using React Navigation. 
I also implement state management with Context API or Redux and optimize performance by avoiding unnecessary re-renders. 
The goal is always to deliver native-like experiences with clean code and high maintainability.
    `;
    break;

  case 'SQL Server':
    this.description = `
I have in-depth experience with Microsoft SQL Server, focusing on database design, 
normalization, indexing, and query optimization for high-performance applications. 
I regularly create stored procedures, triggers, and views to encapsulate logic within the database layer. 
In my .NET projects, I use Entity Framework Core for ORM mapping, allowing seamless integration between 
database operations and application logic. I pay special attention to data integrity, relationships, 
and transaction handling to ensure consistency and reliability in production systems.
    `;
    break;

  case 'MySQL':
    this.description = `
I work extensively with MySQL to design and manage relational databases for Node.js and .NET backends. 
I create structured schemas, define foreign key relationships, and write optimized SQL queries using joins and subqueries. 
In my projects, I use ORM tools like Sequelize or Prisma when working with Node.js for easier query management, 
and I focus on performance optimization through indexing and query planning. 
I also handle migrations, backups, and security best practices like role-based access and data validation.
    `;
    break;

  case 'Tailwind CSS':
    this.description = `
Tailwind CSS is my go-to framework for building responsive, modern, and visually consistent user interfaces. 
I utilize its utility-first approach to rapidly design layouts without leaving the HTML structure, 
ensuring both speed and flexibility in styling. 
I combine Tailwind with React, Angular, or plain HTML templates to create elegant grids, animations, 
and responsive designs that scale well across devices. 
My focus is on creating clean, reusable class structures that maintain visual consistency across the project.
    `;
    break;

  case 'Framer Motion':
    this.description = `
Framer Motion allows me to add life and interactivity to front-end projects, especially when working with React. 
I use it to create smooth transitions, animated page entrances, interactive buttons, and dynamic layout changes 
that improve the overall user experience. 
Animations are implemented thoughtfully — enhancing usability rather than distracting the user. 
By combining Framer Motion with Tailwind CSS and React, I can build highly polished, modern UIs 
that feel professional and engaging across devices.
    `;
    break;
    case 'Problem Solving':
    this.description = `
Problem Solving is a core strength that allows me to tackle complex challenges effectively. 
I approach issues methodically, breaking them down into smaller, manageable parts, 
analyzing possible solutions, and implementing the most efficient one. 
Whether debugging code, optimizing performance, or designing application architecture, 
I consistently focus on finding practical, scalable, and creative solutions 
that deliver real value to the project and users.
    `;
    break;

  case 'Communication':
    this.description = `
Effective Communication is crucial in collaborative development environments. 
I am skilled at clearly articulating ideas, technical concepts, and project updates to teammates, 
managers, and clients. I actively listen to understand requirements and feedback, 
ask clarifying questions when needed, and ensure that discussions lead to actionable outcomes. 
Good communication helps prevent misunderstandings and ensures smooth project progress.
    `;
    break;

  case 'Teamwork':
    this.description = `
Teamwork is essential in modern software development. 
I excel at collaborating with cross-functional teams, sharing knowledge, 
and supporting colleagues to achieve common goals. 
I value diverse perspectives, contribute constructively to discussions, 
and am comfortable taking on different roles depending on team needs. 
Building strong, cooperative relationships enables projects to be completed efficiently and successfully.
    `;
    break;

  case 'Adaptability':
    this.description = `
Adaptability allows me to thrive in fast-changing environments and learn new technologies quickly. 
I embrace change, whether it’s adopting new frameworks, shifting project priorities, or working with unfamiliar tools. 
By remaining flexible and open-minded, I can respond effectively to challenges, pivot strategies when needed, 
and continuously grow as a developer, ensuring that my skills stay relevant and impactful.
    `;
    break;

  case 'Time Management':
    this.description = `
Time Management is a skill I leverage to organize tasks, set priorities, and meet deadlines consistently. 
I break projects into manageable milestones, estimate effort accurately, 
and allocate my time efficiently to maximize productivity. 
By balancing multiple tasks without sacrificing quality, I ensure timely delivery of features, 
bug fixes, and project goals while maintaining a sustainable workflow.
    `;
    break;

  case 'Leadership':
    this.description = `
Leadership involves guiding, motivating, and supporting teams to achieve shared objectives. 
I lead by example, taking initiative when necessary and fostering a collaborative environment. 
I mentor junior developers, delegate tasks appropriately, and facilitate decision-making 
while ensuring accountability and alignment with project goals. 
Strong leadership ensures that projects progress smoothly and that team members grow professionally.
    `;
    break;

  case 'Critical Thinking':
    this.description = `
Critical Thinking allows me to evaluate problems and decisions logically and objectively. 
I assess situations from multiple perspectives, anticipate potential risks, 
and analyze the consequences of different solutions before implementation. 
This skill helps me design robust systems, write reliable code, and make informed choices 
that minimize errors and maximize efficiency in development projects.
    `;
    break;

  case 'Creativity':
    this.description = `
Creativity drives my ability to find innovative solutions and design intuitive, user-friendly interfaces. 
I apply creative thinking to problem-solving, UI/UX design, and architecture decisions, 
exploring unconventional approaches when appropriate. 
By combining creativity with technical knowledge, I deliver unique, practical, 
and engaging solutions that enhance user experience and project value.
    `;
    break;

  case 'Attention to Detail':
    this.description = `
Attention to Detail ensures high-quality output in all aspects of development. 
I carefully review code, UI designs, and documentation to catch errors, inconsistencies, or performance issues. 
I take pride in producing clean, maintainable code and polished designs that meet project specifications. 
This focus minimizes bugs, improves reliability, and creates a professional and seamless user experience.
    `;
    break;

  default:
    this.description = '';
}

}



}
