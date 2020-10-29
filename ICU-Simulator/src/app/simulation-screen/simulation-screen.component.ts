import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var $: any;

@Component({
  selector: 'app-simulation-screen',
  templateUrl: './simulation-screen.component.html',
  styleUrls: ['./simulation-screen.component.scss'],
})
export class SimulationScreenComponent implements OnInit {
  title = 'ICU-Simulator';
  highcharts = null;
  heartRateValue = 85;
  newHeartRateValue = 85;
  SpO2 = 98;
  newSpO2 = 98;
  systolic = 120;
  diastolic = 80;
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

    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0',
      },
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

    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0',
      },
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

    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0',
      },
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
      // this.hearRateValue = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      // this.SpO2 = Math.floor(Math.random() * (91 - 99 + 1) + 91);
      this.systolic = Math.floor(Math.random() * (120 - 140 + 1) + 120);
      this.diastolic = Math.floor(Math.random() * (80 - 90 + 1) + 80);
      this.pulse = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      this.awRR = Math.floor(Math.random() * (12 - 14 + 1) + 12);
      this.Tblood = Math.floor(Math.random() * (95 - 100 + 1) + 99);
    }, 5000);
  }

  changeFrequency() {
    var frequency =
      this.newHeartRateValue != this.heartRateValue
        ? this.heartFrequency + this.newHeartRateValue - 85
        : this.heartFrequency + this.newSpO2 - 98;

    this.highcharts.charts
      .filter((m) => m)[0]
      .series[0].setData(
        [].concat(...new Array(frequency).fill(this.heartRateData))
      );
    this.highcharts.charts
      .filter((m) => m)[1]
      .series[0].setData(
        [].concat(...new Array(frequency).fill(this.spO2Data))
      );
    this.highcharts.charts
      .filter((m) => m)[2]
      .series[0].setData([].concat(...new Array(frequency).fill(this.BPData)));
    this.heartRateValue = this.newHeartRateValue;
    this.SpO2 = this.newSpO2;
    $('#exampleModal').modal('hide');
  }
}
