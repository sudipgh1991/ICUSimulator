import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SimulationScreen } from '../models';
import { SimulationScreenService } from '../shared/simulation-screen.service';
import {Constant} from '../constant';

@Component({
  selector: 'app-simulation-screen-user',
  templateUrl: './simulation-screen-user.component.html',
  styleUrls: ['./simulation-screen-user.component.scss'],
})
export class SimulationScreenComponentUserComponent implements OnInit {
  title = 'ICU-Simulator';
  highcharts = null;
  heartRateValue;
  SpO2;
  systolic;
  diastolic;
  pulse;
  awRR;
  Tblood;
  heartFrequency = 20;
  heartRateData = [0, 10, 20, 10, 10, 15, 0, 85];
  spO2Data = [99, 55, 25, 5, 0];
  BPData = [0, 85, 70, 75, 50, 55, 45, 35, 25, 15, 0];
  params: SimulationScreen;

  chartOptionsHeart = Constant.chartOptionsHeart;

  chartOptionsSpo2 = Constant.chartOptionsSpo2;

  chartOptionsBP = Constant.chartOptionsBP;
  constructor(private simulationService: SimulationScreenService) {}

  ngOnInit(): void {
    this.highcharts = Highcharts;
    Constant.highchartsRefresh();
    setInterval(() => {
      this.pulse = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      this.awRR = Math.floor(Math.random() * (12 - 14 + 1) + 12);
      this.Tblood = Math.floor(Math.random() * (95 - 100 + 1) + 99);
    }, 5000);
    setInterval(() => this.getInitialValues(), 1000);
  }

  getInitialValues(): void {
    this.simulationService.getParameters().subscribe((data) => {
      this.params = data[0];
      this.heartRateValue = this.params.heartRate;
      this.SpO2 = this.params.spO2;
      this.systolic = this.params.bP_Sys;
      this.diastolic = this.params.bP_Dia;
      this.pulse = this.params.pulse;
      this.awRR = this.params.awRR;
      this.Tblood = this.params.tblood;
      this.setInitialDataValuesForGraphs();
      this.changeFrequency();
    });
  }

  setInitialDataValuesForGraphs(): void {
    this.highcharts.charts.filter(m => m)[0].series[0].setData([0, 0, 0, 0].concat(
      ...new Array(this.heartFrequency).fill(this.heartRateData)
    ));
    this.highcharts.charts.filter(m => m)[1].series[0].setData([0, 0, 0, 0].concat(
      ...new Array(this.heartFrequency).fill(this.spO2Data)
    ));
    this.highcharts.charts.filter(m => m)[2].series[0].setData([0, 0, 0, 0].concat(
      ...new Array(this.heartFrequency).fill(this.BPData)
    ));
  }

  changeFrequency(): void {
    this.highcharts.charts
      .filter((m) => m)[0]
      .series[0].setData(
        [].concat(
          ...new Array(this.heartFrequency + this.heartRateValue - 70).fill(
            this.heartRateData
          )
        )
      );
    this.highcharts.charts
      .filter((m) => m)[1]
      .series[0].setData(
        [].concat(
          ...new Array(this.heartFrequency + this.heartRateValue - 70).fill(
            this.spO2Data
          )
        )
      );
    this.highcharts.charts
      .filter((m) => m)[2]
      .series[0].setData(
        [].concat(
          ...new Array(this.heartFrequency + this.heartRateValue - 70).fill(
            this.BPData
          )
        )
      );
  }
}
