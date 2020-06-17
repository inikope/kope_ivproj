google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawGross);

function drawGross() {
      var data = google.visualization.arrayToDataTable([
        ['Product', 'Profit', 'Discounts', 'COGS',],
        ['Paseo', 4797438,	2600518,	28213706],
        ['VTT', 3034608,	1456612,	17477313],
        ['Velo', 2305992,	1576709,	15944067],
        ['Amarilla', 2814104,	1290163,	14933012],
        ['Montana', 2114755,	1159033,	13276047],
        ['Carretera', 1826805,	1122213,	11988503]
      ]);

      var options = {
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Percentage',
          minValue: 0,
        },
        vAxis: {
          title: 'Product'
        },
        legend:{
          position: 'top'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('gross_sales_graph'));

      chart.draw(data, options);
    }