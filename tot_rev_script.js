google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTotRev);

function drawTotRev() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'SUM of Profit');
      data.addColumn('number', 'SUM of Gross Sales')
      data.addColumn('number', 'SUM of COGS');

      data.addRows([
        ['2013', 3878464.51, 28560787, 22536791],
        ['2014', 13015237.75, 99370811.5, 79295857]
      ]);

      var options = {
       hAxis: {
       	format: ' '
       }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('tot_rev_graph'));

      chart.draw(data, options);
    }