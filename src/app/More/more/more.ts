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
}
