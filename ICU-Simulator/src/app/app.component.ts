import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ICU-Simulator';
  highcharts = Highcharts;
  heartData = [
    [10, 10, 20, 10, 85, 20, 10, 10],
    [15, 5, 10, 20, 80, 10, 5, 20],
    [15, 20, 10, 5, 75, 5, 10, 15],
    [5, 10, 25, 20, 90, 20, 10, 15],
  ];
  hearRateValue = 85;
  SpO2 = 95;
  systolic = 120;
  diastolic = 80;
  pulse = 78;
  awRR = 12;
  Tblood = 99;

  chartOptions_heart = {
    chart: {
      type: 'line',
      animation: false,
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
      events: {
        load: function () {
          var series = this.series[0];
          var counter = 0;
          var seriesPos = 0;
          var interval = 120;
          var intervalID = 0;
          var times = 1;
          const heartData = [
            [0, 10, 20, 10, 10, 15, 0, 85],
            [0, 10, 20, 10, 10, 15, 0, 85],
            [0, 10, 20, 10, 10, 15, 0, 85],
            [0, 10, 20, 10, 10, 15, 0, 85],
          ];

          var addPoint = function () {
            if (seriesPos == 4) {
              seriesPos = 0;
            }
            var x = new Date().getTime(),
              y = heartData[seriesPos][counter];
            series.addPoint([x, y], true, true);
            counter++;
            if ((times > 30 && times < 300) || (times > 600 && times < 800)) {
              clearInterval(intervalID);
              interval = 50;
              runInterval();
            } else {
              clearInterval(intervalID);
              interval = 120;
              runInterval();
            }

            if (counter == 8) {
              counter = 0;
              seriesPos++;
            }
          };
          var runInterval = function () {
            intervalID = setInterval(function () {
              addPoint();
              times++;
            }, interval);
          };

          runInterval();
        },
      },
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
        data: (function () {
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -70; i <= 0; i += 1) {
            data.push({
              x: time + i * 350,
              y: [10],
            });
          }
          return data;
        })(),
      },
    ],
  };

  chartOptions_spo2 = {
    chart: {
      type: 'spline',
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
      events: {
        load: function () {
          var series = this.series[0];
          var counter = 0;
          var seriesPos = 0;
          const heartData = [
            [99, 55, 25, 5],
            [99, 55, 25, 5],
            [99, 55, 25, 5],
            [99, 55, 25, 5],
          ];
          setInterval(function () {
            if (seriesPos == 4) {
              seriesPos = 0;
            }
            var x = new Date().getTime(),
              y = heartData[seriesPos][counter];
            series.addPoint([x, y], true, true);
            counter++;
            if (counter == 4) {
              counter = 0;
              seriesPos++;
            }
          }, 600);
        },
      },
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
        data: (function () {
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -70; i <= 0; i += 1) {
            data.push({
              x: time + i * 550,
              y: [0],
            });
          }
          return data;
        })(),
      },
    ],
  };

  ngOnInit(): void {
    setTimeout(() => {
      $('.highcharts-credits').hide();
    }, 20);

    setInterval(() => {
      this.hearRateValue = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      this.SpO2 = Math.floor(Math.random() * (91 - 99 + 1) + 91);
      this.systolic = Math.floor(Math.random() * (120 - 140 + 1) + 120);
      this.diastolic = Math.floor(Math.random() * (80 - 90 + 1) + 80);
      this.pulse = Math.floor(Math.random() * (85 - 75 + 1) + 75);
      this.awRR = Math.floor(Math.random() * (12 - 14 + 1) + 12);
      this.Tblood = Math.floor(Math.random() * (95 - 100 + 1) + 99);
    }, 5000);
  }
}
