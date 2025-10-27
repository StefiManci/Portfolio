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
        data: [1, 3, 6, 9, 12, 15,12],
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
      tooltip: { enabled: true },
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

    'Web-Applications': 'General-purpose dynamic web apps — from dashboards and task managers to productivity tools — focused on clean UI, responsive design, and solid backend logic.',
  };

  this.abilityDescription = descriptions[ability] || 'Select an ability to see details.';
  }
}
