import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var $: any;

@Component({
  selector: 'app-simulation-screen-user',
  templateUrl: './simulation-screen-user.component.html',
  styleUrls: ['./simulation-screen-user.component.scss'],
})
export class SimulationScreenComponentUser implements OnInit {
  title = 'ICU-Simulator';
  highcharts = null;
  heartRateValue = 85;
  newHeartRateValue = 85;
  SpO2 = 98;
  newSpO2 = 98;
  systolic = 150;
  newSystolic = 150;
  diastolic = 90;
  newDiastolic = 90;
  pulse = 78;
  awRR = 12;
  Tblood = 99;
  heartFrequency = 20;
  heartRateData = [0, 10, 20, 10, 10, 15, 0, 85];
  spO2Data = [99, 55, 25, 5, 0];
  BPData = [0, 85, 70, 75, 50, 55, 45, 35, 25, 15, 0];

  chartOptions_heart = {
    chart: {
      type: 'line',
      animation: false,
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
    },
    tooltip: { enabled: false },
    time: {
      useUTC: false,
    },

    title: {
      text: 'Heart Rate',
      style: {
        color: '#E0E0E3',
        fontSize: '20px',
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150,
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3',
        },
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
        style: {
          color: '#A0A0A3',
        },
      },
      visible: false,
    },

    yAxis: {
      title: {
        text: 'Value',
        style: {
          color: '#A0A0A3',
        },
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3',
        },
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      visible: false,
    },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: 'Heart Rate',
        color: '#7FFF00',
        marker: {
          enabled: false,
        },
        animation: false,
        data: [].concat(
          ...new Array(this.heartFrequency).fill(this.heartRateData)
        ),
      },
    ],
  };

  chartOptions_spo2 = {
    chart: {
      type: 'spline',
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
      animation: false,
    },
    tooltip: { enabled: false },
    time: {
      useUTC: false,
    },

    title: {
      text: 'SpO2',
      style: {
        color: '#E0E0E3',
        fontSize: '20px',
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: 'datetime',
      gridLineColor: '#707073',
      labels: false,
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: 'transparent',
      title: {
        style: {
          color: '#A0A0A3',
        },
      },
    },

    yAxis: {
      title: false,
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
      gridLineColor: '#707073',
      labels: false,
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      min: 0,
      max: 100,
    },
    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        marker: {
          enabled: false,
        },
        name: 'SpO2',
        color: '#FFFF00',
        animation: false,
        data: [0, 0, 0, 0].concat(
          ...new Array(this.heartFrequency).fill(this.spO2Data)
        ),
      },
    ],
  };

  chartOptions_BP = {
    chart: {
      type: 'spline',
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
      animation: false,
    },
    tooltip: { enabled: false },
    time: {
      useUTC: false,
    },

    title: {
      text: 'BP',
      style: {
        color: '#E0E0E3',
        fontSize: '20px',
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return 'New point added. Value: ' + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: 'datetime',
      gridLineColor: '#707073',
      labels: false,
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: 'transparent',
      title: {
        style: {
          color: '#A0A0A3',
        },
      },
    },

    yAxis: {
      title: false,
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
      gridLineColor: '#707073',
      labels: false,
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      min: 0,
      max: 100,
    },
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        marker: {
          enabled: false,
        },
        name: 'SpO2',
        color: 'red',
        animation: false,
        data: [0, 0, 0, 0].concat(
          ...new Array(this.heartFrequency).fill(this.BPData)
        ),
      },
    ],
  };

  ngOnInit(): void {
    this.highcharts = Highcharts;
    setTimeout(() => {
      $('.highcharts-credits').hide();
      $('#exampleModal')
        .modal({
          backdrop: false,
        })
        .toggle();
    }, 20);
    setInterval(() => {
      this.pulse = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      this.awRR = Math.floor(Math.random() * (12 - 14 + 1) + 12);
      this.Tblood = Math.floor(Math.random() * (95 - 100 + 1) + 99);
    }, 5000);
    setInterval(() => {
      this.newHeartRateValue = isNaN(
        parseInt(localStorage.getItem('heartRate'))
      )
        ? this.heartRateValue
        : parseInt(localStorage.getItem('heartRate'));
      this.newSpO2 = isNaN(parseInt(localStorage.getItem('spO2')))
        ? this.SpO2
        : parseInt(localStorage.getItem('spO2'));
      this.newSystolic = isNaN(parseInt(localStorage.getItem('systolic')))
        ? this.systolic
        : parseInt(localStorage.getItem('systolic'));
      this.newDiastolic = isNaN(parseInt(localStorage.getItem('diastolic')))
        ? this.diastolic
        : parseInt(localStorage.getItem('diastolic'));
      this.changeFrequency();
    }, 500);
  }

  changeFrequency() {
    if (this.newHeartRateValue != this.heartRateValue) {
      this.highcharts.charts
        .filter((m) => m)[0]
        .series[0].setData(
          [].concat(
            ...new Array(
              this.heartFrequency + this.newHeartRateValue - 70
            ).fill(this.heartRateData)
          )
        );
      this.highcharts.charts
        .filter((m) => m)[1]
        .series[0].setData(
          [].concat(
            ...new Array(
              this.heartFrequency + this.newHeartRateValue - 70
            ).fill(this.spO2Data)
          )
        );
      this.highcharts.charts
        .filter((m) => m)[2]
        .series[0].setData(
          [].concat(
            ...new Array(
              this.heartFrequency + this.newHeartRateValue - 70
            ).fill(this.BPData)
          )
        );
    }
    this.heartRateValue = this.newHeartRateValue;
    this.SpO2 = this.newSpO2;
    this.systolic = this.newSystolic;
    this.diastolic = this.newDiastolic;
    $('#exampleModal').modal('hide');
  }
}
