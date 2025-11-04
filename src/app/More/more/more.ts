import { Component } from '@angular/core';
import { Footer } from "../../Shared/footer/footer";
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-more',
  standalone: true,
  imports: [Footer,BaseChartDirective],
  templateUrl: './more.html',
  styleUrls: ['./more.css']
})
export class More { 
journeyData: ChartConfiguration<'line'>['data'] = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024','2025'],
    datasets: [
      {
        label: 'Milestones',
        data: [3, 4, 3, 5, 7, 15,12],
        borderColor: 'rgba(37,99,235,0.9)',
        backgroundColor: 'rgba(37,99,235,0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 6,
        pointHoverRadius: 10,
      },
    ],
  };

  // Chart options
  journeyOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true, callbacks:{
         label: function(context) {
          const customLabels = [ [
               'Started High School',
               'First Introduction To Web Development',
               'Started Learning HTML & CSS'
           ],[ 
    'Progress on HTML & CSS',
    'Started Learning JavaScript',
    'Built First Simple Website',
    'Joined Online Coding Communities',
    'Finished First High School Year'
  ],[
    'Completed JavaScript Basics',
    'Took on Math And Science Courses',
    'Finished Second High School Year'
  ],[
    'Html,Css & JavaScript Proficient',
    'Deepened Understanding of Web Dev',
    'First Introduction To C Programming',
    'First C Mini-App Developed',
    'Graduated High School',
  ],[
    'Started University',
    'Learned Advanced C Concepts',
    'Intro to Data Structures & Algorithms',
    'Started First Udemy Course On Full-Stack Web Development',
    'Intrduction To React.js,Node.js & Databases',
    'Built Interactive Web Applications',
    'Completed First Year of University',
  ],[
    'Finished C Language Basics',
    'Started Learning C++/Java In University',
    'Built Several Test Projects Using React.js & Node.js',
    'Started Another Full-Stack Web Development Course',
    'Started Contributing to Open Source Projects',
    'Developed Problem-Solving Skills',
    'Started My First Internship on Asp.Net Backend Development',
    'Completed Second Year of University',
  ],[
    'Finished My Internship',
    'Deep Dive on Asp.Net Core & MVC & Web API',
    'Built Several Projects Using Asp.Net Core',
    'Started My First Job As A Junior Full-Stack Developer',
    'Started Learning Angular Framework Online/Job',
    'Improved My Skills in Frontend & Backend Development',
    'Improved My Understanding of Software Development Life Cycle And Scalability',
    'Completed Third Year of University',
  ],


   'Progress', 'Review', 'Completed'];
          return customLabels[context.dataIndex];
        }
      }},
    },
    scales: {
      x: { title: { display: true, text: 'Year' } },
      y: { title: { display: true, text: 'Achievements' } },
    },
  };

  // Ability
  chosenAbility: string = '';
  abilityDescription: string ="";

  selectAbility(ability: string) {
    this.chosenAbility = ability;

    const descriptions: { [key: string]: string } = {
    'E-Commerce Stores': 'Full-featured online stores with product management, cart functionality, secure checkout, and payment gateway integration. Designed for performance, user experience, and scalability.',

    'Customer Portals / CRM System': 'Secure platforms for managing clients, communication, and data — including user profiles, support tickets, and analytics for business insights.',

    'Analytics Dashboards': 'Interactive dashboards for tracking KPIs, visualizing data, and managing reports. Built with charting libraries and dynamic APIs for real-time analytics.',

    'Authentication & User Management Systems': 'Secure login and registration systems using JWT or OAuth, complete with role-based access control, password recovery, and account verification.',

    'RESTful & GraphQL APIs': 'Robust backends designed for performance and modularity — supporting CRUD operations, authentication, and data integration for frontend or mobile apps.',

    'Microservices Architecture Projects': 'Scalable systems split into independent services communicating via APIs — enabling modular development, easier maintenance, and high reliability.',

    'Banking & FinTech Platforms': 'Financial applications for transactions, balance management, fund transfers, and audit logs — with strict data validation and security compliance.',

    'Saas Products': 'Subscription-based web applications offering business tools, dashboards, and automation. Includes authentication, billing, and scalable architecture.',

    'Web & Mobile Applications': 'General-purpose dynamic web apps — from dashboards and task managers to productivity tools — focused on clean UI, responsive design, and solid backend logic.',
  };

  this.abilityDescription = descriptions[ability] || 'Select an ability to see details.';
  }
}
