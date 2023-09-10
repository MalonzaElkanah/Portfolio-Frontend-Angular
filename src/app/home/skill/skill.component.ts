import { Component, Input, ViewChild, OnInit } from '@angular/core';

import { TechnicalSkill, ProfessionalSkill, ProfessionalSkillList } from '../home';
import { HomeService } from '../home.service';

import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  // ApexResponsive,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  chart: ApexChart;
  series: ApexNonAxisChartSeries;
  colors: any;
  // responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  labels: any;
};

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() technical_skills: [TechnicalSkill] | undefined;
  public professional_skills: [ProfessionalSkill] | undefined;

  @ViewChild("chart0", { static: false }) chart!: ChartComponent;
  @ViewChild("chart1", { static: false }) chart1!: ChartComponent;
  @ViewChild("chart2", { static: false }) chart2!: ChartComponent;
  @ViewChild("chart3", { static: false }) chart3!: ChartComponent;
  public chartOptions!: [ChartOptions];


  // skills: [ProfessionalSkill] | undefined;
  //homeService: HomeService = inject(HomeService); 

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    // let skills = ["Team Work", "Communication", "Project Mngmt", "Creativity"];
    // for (let skill of skills){ }

    this.homeService.getAllProfessionalSkills().subscribe((skills: ProfessionalSkillList) => {

      if ( skills.results ) {
        this.professional_skills = skills.results;
        

        for (let skill of this.professional_skills) {
          let option = this.chartOption([skill.name], [skill.percentage])

          if (this.professional_skills.indexOf(skill) == 0) {
            this.chartOptions = [option];
            console.log(this.chartOptions);
          } else {
            this.chartOptions.push(option);
            console.log(this.chartOptions);
          }
          
        }
      }
    });

  }

  private chartOption(
    labels:[any]=["Team Work"],
    series:[any]=[90]
  ): ChartOptions {
    let chartOption: ChartOptions = {
      chart: {
        height: 180,
        type: "radialBar"
      },
      series: series, //[90],
      colors: ["#20E647"],

      plotOptions: {
        radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#293450"
            },
          track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
            }
            },
          dataLabels: {
              name: {
                offsetY: -10,
                color: "#fff",
                fontSize: "13px"
              },
              value: {
                color: "#fff",
                fontSize: "25px",
                show: true
              }
          }
        }
      },
      fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
      },
      stroke: {
          lineCap: "round"
      },
      labels: labels // [skill]
    };

    return chartOption;
  } 

}
