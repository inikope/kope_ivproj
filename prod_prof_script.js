google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
document.getElementById('prod_prof_filter').addEventListener('change', function() {
  switch (this.value) {
    case 'cp':
      drawChart(1);
      break;
    case 'ent':
      drawChart(2);
      break;
    case 'gov':
      drawChart(3);
      break;
    case 'mid':
      drawChart(4);
      break;
    case 'sb':
      drawChart(5);
      break;
  }
});

      function drawChart(number) {
      if(!number){
      	number = 1;
      }
				var arrayData=[
        	['Products', 'Channel Partners','Enterprise', 'Government', 'Midmarket', 'Small Business'],
          ['Amarilla',	230068.5, 95152.5,	2208301.61,	63605.45,	407281],
          ['Carretera',	208405.68,	222711.875,	1398994.08,	94105,	348012],
          ['Montana',	192457.56,	31096.25,	1126201.02,	83879.05,	743313.5],
					['Paseo',	331838.4,	81740,	3057290.7,	258739.35,	1231309.5],
          ['Velo',	134267.04,	84762.5,	1756732.05,	68653.375,	431102.5],
          ['VTT',	219765.96,	99082.5,	1840653.71,	91120.85,	982150]
        ];
  var filteredData = [];
  filteredData.push(arrayData[0]);
    for (var i = 1; i < arrayData.length; i++) {
        filteredData.push(arrayData[i]);
  }
        var data = google.visualization.arrayToDataTable(arrayData);
    for (var i = 5; i >= 1; i--) {
    		if(i != number){
        	data.removeColumn(i);
        }
  }
 
        var options = {
          title: 'Product Profit Based on Segment'
        };

        var chart = new google.visualization.PieChart(document.getElementById('prod_prof_graph'));

        chart.draw(data, options);
      }