google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawRevDev);
document.getElementById('rev_dev_filter').addEventListener('change', function() {
    switch (this.value) {
         case 'all':
            drawRevDev();
        break;
        case '2013':
            drawRevDev(2013);
        break;
        case '2014':
            drawRevDev(2014);
        break;
    }
});

function drawRevDev(year) {
	if(!year){
  	year = 0;
  }
  var arrayData =
    [['Month', 	'Year', 'Profit', 	'Sales', 			'COGS'],
    ['September',2013, 763603.03,	 4484000.03,	 3720397],
    ['October', 	2013, 1657795.1,	  9295611.1,	 7637816],
    ['November',	2013, 765502.3, 	  7267203.3,	 6501701],
    ['December',	2013, 691564.08,	 5368441.08,	 4676877],
    ['January',		2014, 814028.68,	 6607761.68,	 5793733],
    ['February',  2014, 1148547.39,	 7297531.39,	 6148984],
    ['March',			2014, 669866.87,	 5586859.87,	 4916993],
    ['April', 		2014, 929984.57,	 6964775.07,	6034790.5],
    ['May', 	  	2014, 828640.06,	 6210211.06,	5381571],
    ['June', 			2014, 1473753.82,	 9518893.82,	8045140],
    ['July', 			2014, 923865.68,	 8102920.18, 7179054.5],
    ['August', 		2014, 791066.42,	 5864622.42,	5073556],
		['September', 2014,1023132.24,	 6398697.24,	5375565],
    ['October', 	2014, 1781985.92,	12375819.92,	10593834],
    ['November',	2014,   604600.2, 	5384214.2, 	 4779614],
    ['December',	2014, 2025765.9,	11998787.9,	9973022]
]

		var filteredData = [];
      filteredData.push(arrayData[0]);
      if(year == 0){
	      for (var i=1; i<arrayData.length; i++) {
       			if(arrayData[i][1] == 2013){
            		arrayData[i][0] = arrayData[i][0] + ' 2013';
		        		filteredData.push(arrayData[i]);
            } else if(arrayData[i][1] == 2014){
            		arrayData[i][0] = arrayData[i][0] + ' 2014';
		        		filteredData.push(arrayData[i]);
            }
        }
      } else {
        for (var i=1; i<arrayData.length; i++) {
          if (arrayData[i][1] == year) {
            filteredData.push(arrayData[i]);
          }      
        }
      }

      var data = google.visualization.arrayToDataTable(filteredData);
      data.removeColumn(1);

      var options = {
        title: 'Revenue Development',
        hAxis: {
          title: 'Month',
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('rev_dev_graph'));

      chart.draw(data, options);
    }