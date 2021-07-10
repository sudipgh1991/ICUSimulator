import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SimulationScreen } from '../models';
import { SimulationScreenService } from '../shared/simulation-screen.service';
import { Constant } from '../constant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-simulation-screen-admin',
  templateUrl: './simulation-screen-admin.component.html',
  styleUrls: ['./simulation-screen-admin.component.scss'],
})
export class SimulationScreenComponentAdminComponent implements OnInit {
  title = 'ICU-Simulator';
  highcharts = null;
  heartRateValue;
  newHeartRateValue;
  SpO2;
  newSpO2;
  systolic;
  newSystolic;
  diastolic;
  newDiastolic;
  pulse;
  awRR;
  Tblood;
  heartFrequency = 20;
  heartRateData = [10, 20, 10, 10, 15, 20, 0, 90, 0, 20];
  spO2Data = [99, 55, 25, 5, 0];
  BPData = [0, 85, 70, 75, 50, 55, 45, 35, 25, 15, 0];
  params: SimulationScreen;
  showSpinner = true;

  chartOptionsHeart = Constant.chartOptionsHeart;

  chartOptionsSpo2 = Constant.chartOptionsSpo2;

  chartOptionsBP = Constant.chartOptionsBP;
  constructor(
    private simulationService: SimulationScreenService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.highcharts = Highcharts;
    this.getInitialValues();
    Constant.highchartsRefresh();
    setInterval(() => {
      this.pulse = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      this.awRR = Math.floor(Math.random() * (12 - 14 + 1) + 12);
      this.Tblood = Math.floor(Math.random() * (95 - 100 + 1) + 99);
    }, 5000);
  }

  getInitialValues(): void {
    this.simulationService.getParameters().subscribe((data) => {
      this.showSpinner = false;
      this.params = data[0];
      this.heartRateValue = this.params.heartRate;
      this.newHeartRateValue = this.heartRateValue;
      this.SpO2 = this.params.spO2;
      this.newSpO2 = this.SpO2;
      this.systolic = this.params.bP_Sys;
      this.newSystolic = this.systolic;
      this.diastolic = this.params.bP_Dia;
      this.newDiastolic = this.diastolic;
      this.pulse = this.params.pulse;
      this.awRR = this.params.awRR;
      this.Tblood = this.params.tblood;
      this.changeFrequency();
    });
  }

  changeFrequency = (): void => {
    this.highcharts.charts
      .filter((m) => m)[0]
      .series[0].setData(
        [].concat(
          ...new Array(
            Math.floor(10 + (this.heartRateValue - 100) * 0.05)
          ).fill(this.heartRateData)
        )
      );
    this.highcharts.charts
      .filter((m) => m)[1]
      .series[0].setData(
        [].concat(
          ...new Array(
            Math.floor(10 + (this.heartRateValue - 100) * 0.05)
          ).fill(this.spO2Data)
        )
      );
    this.highcharts.charts
      .filter((m) => m)[2]
      .series[0].setData(
        [].concat(
          ...new Array(
            Math.floor(10 + (this.heartRateValue - 100) * 0.05)
          ).fill(this.BPData)
        )
      );
  };

  saveData(): void {
    this.params.heartRate = this.newHeartRateValue;
    this.params.spO2 = this.newSpO2;
    this.params.bP_Sys = this.newSystolic;
    this.params.bP_Dia = this.newDiastolic;
    this.simulationService.saveParameters(this.params).subscribe();
    $('#exampleModal').modal('hide');
    this.getInitialValues();
  }

  open(content) {
    setTimeout(() => $('ngb-modal-backdrop').remove(), 1);
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'dark-modal',
        size: 'l',
        centered: true,
      })
      .result.then(
        (result) => {
          this.saveData();
        },
        (reason) => {}
      );
  }
}
