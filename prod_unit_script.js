google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawProdUnit);

document.getElementById('prod_unit_filter').addEventListener('change', function () {
  var product = document.getElementById('prod_unit_filter2').value;
  var productCode = 0;
  switch (product) {
    case 'all':
      productCode = 0;
      break;
    case 'am':
      productCode = 1;
      break;
    case 'ca':
      productCode = 3;
      break;
    case 'mo':
      productCode = 5;
      break;
    case 'pa':
      productCode = 7;
      break;
    case 've':
      productCode = 9;
      break;
    case 'vtt':
      productCode = 11;
      break;
  }
  switch (this.value) {
    case 'all':
      drawProdUnit(0, productCode);
      break;
    case '2013':
      drawProdUnit(2013, productCode);
      break;
    case '2014':
      drawProdUnit(2014, productCode);
      break;
  }
});
document.getElementById('prod_unit_filter2').addEventListener('change', function () {
  var yearVal = document.getElementById('prod_unit_filter').value;
  var year = 0;
  switch (yearVal) {
    case '2013':
      year = 2013;
      break;
    case '2014':
      year = 2014;
      break;
    default:
      year = 0;
      break;
  }
  switch (this.value) {
    case 'all':
      drawProdUnit(year, 0);
      break;
    case 'am':
      drawProdUnit(year, 1);
      break;
    case 'ca':
      drawProdUnit(year, 3);
      break;
    case 'mo':
      drawProdUnit(year, 5);
      break;
    case 'pa':
      drawProdUnit(year, 7);
      break;
    case 've':
      drawProdUnit(year, 9);
      break;
    case 'vtt':
      drawProdUnit(year, 11);
      break;
  }
});


function drawProdUnit(year, product) {

  if (!year) {
    year = 0;
  }
  if (!product) {
    product = 0;
  }

  var dataArray = [
    ['Month', 'Year', 'Amarilla', { role: 'style' }, 'Carretera', { role: 'style' }, 'Montana', { role: 'style' }, 'Paseo', { role: 'style' }, 'Velo', { role: 'style' }, 'VTT', { role: 'style' }],
    ['September', 2013, 6691, '#3366cc', 6045, '#dc3912', 6620, '#ff9900', 15790, '#109618', 7502, '#990099', 7953, '#0099c6'],
    ['October', 2013, 14044, '#3366cc', 11571, '#dc3912', 17608, '#ff9900', 26789, '#109618', 13836, '#990099', 11774, '#0099c6'],
    ['November', 2013, 5709, '#3366cc', 7690, '#dc3912', 7821, '#ff9900', 20812, '#109618', 10193, '#990099', 13256, '#0099c6'],
    ['December', 2013, 7244, '#3366cc', 6098, '#dc3912', 4231, '#ff9900', 18856, '#109618', 7940, '#990099', 8601, '#0099c6'],
    ['January', 2014, 10019, '#3366cc', 6578, '#dc3912', 7700, '#ff9900', 23598, '#109618', 9971, '#990099', 9967, '#0099c6'],
    ['February', 2014, 8475, '#3366cc', 7503, '#dc3912', 5405, '#ff9900', 14629, '#109618', 7893, '#990099', 11210, '#0099c6'],
    ['March', 2014, 7716, '#3366cc', 6476, '#dc3912', 8280, '#ff9900', 16695, '#109618', 6691, '#990099', 7562, '#0099c6'],
    ['April', 2014, 10767, '#3366cc', 13590, '#dc3912', 10055, '#ff9900', 23653, '#109618', 11458, '#990099', 9362, '#0099c6'],
    ['May', 2014, 10237, '#3366cc', 4800, '#dc3912', 8300, '#ff9900', 15417, '#109618', 7015, '#990099', 6002, '#0099c6'],
    ['June', 2014, 13985, '#3366cc', 15055, '#dc3912', 14069, '#ff9900', 25598, '#109618', 16953, '#990099', 17642, '#0099c6'],
    ['July', 2014, 11620, '#3366cc', 6960, '#dc3912', 10568, '#ff9900', 22637, '#109618', 11253, '#990099', 6309, '#0099c6'],
    ['August', 2014, 8865, '#3366cc', 7365, '#dc3912', 6209, '#ff9900', 18834, '#109618', 9765, '#990099', 9667, '#0099c6'],
    ['September', 2014, 15931, '#3366cc', 14250, '#dc3912', 14446, '#ff9900', 33206, '#109618', 14525, '#990099', 15523, '#0099c6'],
    ['October', 2014, 26656, '#3366cc', 26653, '#dc3912', 31912, '#ff9900', 56412, '#109618', 29585, '#990099', 29886, '#0099c6'],
    ['November', 2014, 12218, '#3366cc', 17203, '#dc3912', 18239, '#ff9900', 34941, '#109618', 17185, '#990099', 21345, '#0099c6'],
    ['December', 2014, 18825, '#3366cc', 20412, '#dc3912', 19014, '#ff9900', 52619, '#109618', 20129, '#990099', 24307, '#0099c6']
  ]

  var filteredDataArray = [];
  filteredDataArray.push(dataArray[0]);
  if (year == 0) {
    for (var i = 1; i < dataArray.length; i++) {
      if (dataArray[i][1] == 2013) {
        dataArray[i][0] = dataArray[i][0] + ' 2013';
      } else {
        dataArray[i][0] = dataArray[i][0] + ' 2014';
      }
      filteredDataArray.push(dataArray[i]);
    }
  } else {
    for (var i = 1; i < dataArray.length; i++) {
      if (dataArray[i][1] == year) {
        filteredDataArray.push(dataArray[i]);
      }
    }
  }

  var data = google.visualization.arrayToDataTable(filteredDataArray);
  data.removeColumn(1);
  if (product != 0) {
    for (var i = 11; i >= 1; i -= 2) {
      if (i != product) {
        data.removeColumn(i+1);
        data.removeColumn(i);
      }

    }
  }

  var optionsDefault = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: [ '#3366cc', '#dc3912', '#FF9900', '#109618', '#990099', '#0099c6']
  };
  var optionsAm = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: [ '#3366cc']
  };
  var optionsCa = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: [ '#DC3912']
  };
  var optionsMo = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: [ '#FF9900']
  };
  var optionsPa = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: ['#109618']
  };
  var optionsVe = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: [ '#990099']
  };
  var optionsVTT = {
    legend: {
      position: 'top',
      maxLines: 3
    },
    vAxis: {
      viewWindow: {
        max: 57000,
        min: 4000
      }
    },
    colors: ['#0099c6']
  };

  var chart = new google.visualization.LineChart(document.getElementById('prod_unit_graph'));
  switch(product){
    case 1:
      chart.draw(data, optionsAm); break;
    case 3:
      chart.draw(data, optionsCa); break;
    case 5:
      chart.draw(data, optionsMo); break;
    case 7:
      chart.draw(data, optionsPa); break;
    case 9:
      chart.draw(data, optionsVe); break;
    case 11:
      chart.draw(data, optionsVTT); break;
    default:
      chart.draw(data, optionsDefault); break;
  }


}