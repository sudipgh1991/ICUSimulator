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
  heartData = [10, 10, 20, 10, 85, 20, 10, 10];
  hearRateValue = 85;
  chartOptions = {
    chart: {
      type: 'line',
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
      events: {
        load: function () {
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(),
              y = Math.floor(Math.random() * (85 - 75 + 1) + 75);
            series.addPoint([x, y], true, true);
          }, 700);
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
        data: (function () {
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 700,
              y: Math.floor(Math.random() * (85 - 75 + 1) + 75),
            });
          }
          return data;
        })(),
      },
    ],
  };

  chartOptions_heart = {
    chart: {
      type: 'line',
      marginRight: 10,
      backgroundColor: 'rgb(51,51,52)',
      events: {
        load: function () {
          var series = this.series[0];
          var counter = 0;
          setInterval(function () {
            var x = new Date().getTime(),
              y = [10, 20, 10, 85, 20, 10, 10][counter];
            series.addPoint([x, y], true, true);
            counter++;
            if (counter == 7) {
              counter = 0;
            }
          }, 550);
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
        data: (function () {
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -70; i <= 0; i += 1) {
            data.push({
              x: time + i * 550,
              y: [10, 20, 10, 85, 20, 10, 10],
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
    }, 5000);
  }
}
