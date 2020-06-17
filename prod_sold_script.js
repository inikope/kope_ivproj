google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

       document.getElementById('prod_sold_filter').addEventListener('change', function(){
       switch(this.value){
         case 'all':
           drawChart();
         break;
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
     ['Month', 'Year', 'Sum of Units Sold'], 
     ['September', 2013, 6691],
     ['October', 2013, 	14044], 
     ['November', 2013, 	5709], 
     ['December', 2013, 	7244],
     ['January', 2014,		10019],
           ['February', 2014,	8475],
           ['March', 	2014,		7716],
           ['April', 	2014,		10767],
           ['May'	, 	2014, 	10237],
           ['June'	, 	2014,		13985],
           ['July'	,		2014, 	11620],
           ['August', 	2014,		8865],
           ['September', 2014,	9240],
           ['October', 2014,		12612],
           ['November', 2014,	6509],
           ['December', 2014,	11581]

     ]
           

         var filteredDataArray = [];
     filteredDataArray.push(dataArray[0]);
     if(year == 0){
         for (var i=1; i<dataArray.length; i++) {
                  if(dataArray[i][1] == 2013){
                   dataArray[i][0] = dataArray[i][0] + ' 2013';
                       filteredDataArray.push(dataArray[i]);
           } else if(dataArray[i][1] == 2014){
                   dataArray[i][0] = dataArray[i][0] + ' 2014';
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
        title: 'Product Sold Monthly',
        vAxis: {
          title: 'in millions of dollars (USD)',
        },
        legend: { position: 'bottom' }
      };
           
     var chart = new google.visualization.LineChart(document.getElementById('prod_sold_graph'));
           
        chart.draw(data, options);
     
     
   }