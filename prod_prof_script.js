google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawProdProf);
document.getElementById('prod_prof_filter').addEventListener('change', function() {
  switch (this.value) {
    case 'cp':
      drawProdProf(1);
      break;
    case 'ent':
      drawProdProf(2);
      break;
    case 'gov':
      drawProdProf(3);
      break;
    case 'mid':
      drawProdProf(4);
      break;
    case 'sb':
      drawProdProf(5);
      break;
    default:
      drawProdProf(0);
      break;
  }
});

      function drawProdProf(number) {
      if(!number){
      	number = 0;
      }
				var arrayData=[
        	['Products', 'Channel Partners','Enterprise', 'Government', 'Midmarket', 'Small Business', 'Grand Total'],
          ['Amarilla',	230068.5, 95152.5,	2208301.61,	63605.45,	407281, 2814104.06],
          ['Carretera',	208405.68,	222711.875,	1398994.08,	94105,	348012, 1826804.885 ],
          ['Montana',	192457.56,	31096.25,	1126201.02,	83879.05,	743313.5, 2114754.88],
					['Paseo',	331838.4,	81740,	3057290.7,	258739.35,	1231309.5, 4797437.95],
          ['Velo',	134267.04,	84762.5,	1756732.05,	68653.375,	431102.5, 2305992.465],
          ['VTT',	219765.96,	99082.5,	1840653.71,	91120.85,	982150, 3034608.02]
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
          legend:{
            position: 'left',
            maxLine:3
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('prod_prof_graph'));

        chart.draw(data, options);
      }