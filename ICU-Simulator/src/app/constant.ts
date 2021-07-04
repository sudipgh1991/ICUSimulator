declare var $: any;
export class Constant {
  //public static api = 'http://' + window.location.hostname + ':8080/api/';
  public static api = 'http://http://dotnetcore-icusimul.herokuapp.com/api/';

  public static chartOptionsHeart = {
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
        announcementFormatter(allSeries, newSeries, newPoint): any {
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
      },
    ],
  };

  public static chartOptionsSpo2 = {
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
        announcementFormatter(allSeries, newSeries, newPoint): any {
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
      },
    ],
  };

  public static chartOptionsBP = {
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
        announcementFormatter(allSeries, newSeries, newPoint): any {
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
      },
    ],
  };

  public static highchartsRefresh = () => {
    setTimeout(() => {
      $('.highcharts-credits').hide();
      $('#exampleModal')
        .modal({
          backdrop: false,
        })
        .toggle();
    }, 20);
  };
}
