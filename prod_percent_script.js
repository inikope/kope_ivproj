google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Product', 'Profit'],
    ['Amarilla', 2814104],
    ['Carretera', 1826804],
    ['Montana',  2114754],
    ['Paseo', 4797437],
    ['Velo', 2305992],
    ['VTT',    3034608]
  ]);

  var options = {
    title: 'Percentage Profit Product',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('prod_percent_graph'));
  chart.draw(data, options);
}