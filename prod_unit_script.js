google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

       document.getElementById('prod_unit_filter').addEventListener('change', function(){
       switch(this.value){
           case '2013':
               drawChart(2013);
               break;
           case '2014':
               drawChart(2014);
               break;
       }
  });


   function drawChart(year) {
   
       if(!year){
         year=0;
     }

     var dataArray = [
     ['Month', 'Year', 'Amarilla', 'Carratera', 'Montana', 'Paseo', 'Velo', 'VTT'], 
     [ '9', 	2013, 6691, 	6045, 	6620, 	15790, 	7502, 	7953],
     [ '10',	2013, 14044,	11571,	17608,	26789,	13836,	11774],
     [ '11',	2013, 5709,	7690,		7821,		20812,	10193,	13256],
     [ '12',	2013, 7244,	6098,		4231,		18856,	7940,		8601], 
     [ '1',	2014,  10019, 6578, 	7700, 	23598, 	9971, 	9967],
     [ '2',	2014,  8475	, 7503,		5405, 	14629, 	7893, 	11210],
     [ '3', 	2014, 7716	, 6476,		8280,		16695,	6691,		7562],
     [ '4',	2014, 10767	,	13590,	10055,	23653,	11458, 	9362],
     [ '5',	2014, 10237	,	4800,		8300,		15417,	7015,		6002],
     [ '6',	2014,  13985,	15055,	14069,	25598,	16953,	17642],
     [ '7',	2014,  11620,	6960,		10568,	22637,	11253,	6309.5],
     [ '8',	2014,  	8865,	7365,		6209,		18834,	9765,		9667],
     [ '9',	2014,  15931,	14250,	14446,	33206,	14525,	15523],
     [ '10',	2014, 26656,	26653,	31912,	56412,	29585,	29886],
     [ '11',	2014, 12218,	17203,	18239,	34941,	17185,	21345],
     [ '12',	2014, 18825,	20412,	19014,	52619,	20129,	24307]
     ]

         var filteredDataArray = [];
     filteredDataArray.push(dataArray[0]);
     if(year == 0){
         for (var i=1; i<dataArray.length; i++) {
                  if(dataArray[i][1] == 2013){
                   dataArray[i][0] = dataArray[i][0] + " '13";
                       filteredDataArray.push(dataArray[i]);
           } else if(dataArray[i][1] == 2014){
                   dataArray[i][0] = dataArray[i][0] + " '14";
                       filteredDataArray.push(dataArray[i]);
           }
       }
     } else {
       for (var i=1; i<dataArray.length; i++) {
         if (dataArray[i][1] == year) {
           filteredDataArray.push(dataArray[i]);
         }      
       }
     }
   
          var data = google.visualization.arrayToDataTable(filteredDataArray); 
     data.removeColumn(1);
  
     var options = {
       chart: {
         title: 'Product Sold Monthly',
         subtitle: 'in millions of dollars (USD)'
       },
     };
           
     var chart = new google.charts.Line(document.getElementById('prod_unit_graph'));
           
        chart.draw(data, google.charts.Line.convertOptions(options));
     
     
   }