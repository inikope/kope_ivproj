google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawTotRev);

document.getElementById('tot_rev_filter').addEventListener('change', function () {
  switch (this.value) {
    case 'all':
      drawTotRev();
      break;
    case 'jan':
      drawTotRev(1);
      break;
    case 'feb':
      drawTotRev(2);
      break;
    case 'mar':
      drawTotRev(3);
      break;
    case 'apr':
      drawTotRev(4);
      break;
    case 'may':
      drawTotRev(5);
      break;
    case 'june':
      drawTotRev(6);
      break;
    case 'july':
      drawTotRev(7);
      break;
    case 'aug':
      drawTotRev(8);
      break;
    case 'sep':
      drawTotRev(9);
      break;
    case 'oct':
      drawTotRev(10);
      break;
    case 'nov':
      drawTotRev(11);
      break;
    case 'dec':
      drawTotRev(12);
      break;
  }
});

function drawTotRev(month) {
  if (!month) {
    month = 0;
  }

  var arrayData = [
    ['Year', 'Month', 'Profit', 'Gross Sales', 'COGS'],
    ['2013', 9, 763603.03, 4484000.03, 3720397],
    ['2013', 10, 1657795.1, 9295611.1, 7637816],
    ['2013', 11, 765502.3, 7267203.3, 6501701],
    ['2013', 12, 691564.08, 5368441.08, 4676877],
    ['2014', 1, 814028.68, 6607761.68, 5793733],
    ['2014', 2, 1148547.39, 7297531.39, 6148984],
    ['2014', 3, 669866.87, 5586859.87, 4916993],
    ['2014', 4, 929984.57, 6964775.07, 6034790.5],
    ['2014', 5, 828640.06, 6210211.06, 5381571],
    ['2014', 6, 1473753.82, 9518893.82, 8045140],
    ['2014', 7, 923865.68, 8102920.18, 7179054.5],
    ['2014', 8, 791066.42, 5864622.42, 5073556],
    ['2014', 9, 1023132.24, 6398697.24, 5375565],
    ['2014', 10, 1781985.92, 12375819.92, 10593834],
    ['2014', 11, 604600.2, 5384214.2, 4779614],
    ['2014', 12, 2025765.9, 11998787.9, 9973022]
  ]

  var filteredData = [];
  filteredData.push(arrayData[0]);
  if (month == 0) {
    for (var i = 1; i < arrayData.length; i++) {
      switch (arrayData[i][1]) {
        case 1:
          arrayData[i][0] = 'January ' + arrayData[i][0];
          break;
        case 2:
          arrayData[i][0] = 'February ' + arrayData[i][0];
          break;
        case 3:
          arrayData[i][0] = 'March ' + arrayData[i][0];
          break;
        case 4:
          arrayData[i][0] = 'April ' + arrayData[i][0];
          break;
        case 5:
          arrayData[i][0] = 'May ' + arrayData[i][0];
          break;
        case 6:
          arrayData[i][0] = 'June ' + arrayData[i][0];
          break;
        case 7:
          arrayData[i][0] = 'July ' + arrayData[i][0];
          break;
        case 8:
          arrayData[i][0] = 'August ' + arrayData[i][0];
          break;
        case 9:
          arrayData[i][0] = 'September ' + arrayData[i][0];
          break;
        case 10:
          arrayData[i][0] = 'October ' + arrayData[i][0];
          break;
        case 11:
          arrayData[i][0] = 'November ' + arrayData[i][0];
          break;
        case 12:
          arrayData[i][0] = 'December ' + arrayData[i][0];
          break;
      }
      filteredData.push(arrayData[i]);
    }
  } else {
    for (var i = 1; i < arrayData.length; i++) {
      if (arrayData[i][1] == month) {
        filteredData.push(arrayData[i]);
      }
    }
  }

  var data = google.visualization.arrayToDataTable(filteredData);
  data.removeColumn(1);


  var options = {
    title: 'Total Revenue',
    hAxis: {
      format: ' ',
      title: 'Year'
    },
    vAxis: {
      title: 'USD',
      viewWindow: {
        max: 12500000
      }
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('tot_rev_graph'));

  chart.draw(data, options);
}