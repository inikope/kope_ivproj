google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawProdUnit);

       document.getElementById('prod_unit_filter').addEventListener('change', function(){
        var product = document.getElementById('prod_unit_filter2').value;
        var productCode = 0;
          switch(product){
          case 'all':
            productCode = 0;
            break;
          case 'am':
            productCode = 1;
            break;
          case 'ca':
            productCode = 2;
            break;
          case 'mo':
            productCode = 3;
            break;
          case 'pa':
            productCode = 4;
            break;
          case 've':
            productCode = 5;
            break;
          case 'vtt':
            productCode = 6;
            break;
        }
        switch(this.value){
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
  document.getElementById('prod_unit_filter2').addEventListener('change', function(){
    var yearVal = document.getElementById('prod_unit_filter').value;
    var year = 0;
    switch(yearVal){
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
    switch(this.value){
       case 'all':
         drawProdUnit(year, 0);
         break;
        case 'am':
         drawProdUnit(year, 1);
            break;
        case 'ca':
         drawProdUnit(year, 2);
            break;
        case 'mo':
          drawProdUnit(year, 3);
              break;
        case 'pa':
         drawProdUnit(year, 4);
            break;
        case 've':
          drawProdUnit(year, 5);
             break;
        case 'vtt':
          drawProdUnit(year, 6);
             break;
      }
    });


   function drawProdUnit(year, product) {
   
       if(!year){
         year=0;
     }
     if(!product){
       product = 0;
     }

     var dataArray = [
     ['Month', 'Year', 'Amarilla', 'Carretera', 'Montana', 'Paseo', 'Velo', 'VTT'], 
     [ 'September', 	2013, 6691, 	6045, 	6620, 	15790, 	7502, 	7953],
     [ 'October',	2013, 14044,	11571,	17608,	26789,	13836,	11774],
     [ 'November',	2013, 5709,	7690,		7821,		20812,	10193,	13256],
     [ 'December',	2013, 7244,	6098,		4231,		18856,	7940,		8601], 
     [ 'January',	2014,  10019, 6578, 	7700, 	23598, 	9971, 	9967],
     [ 'February',	2014,  8475	, 7503,		5405, 	14629, 	7893, 	11210],
     [ 'March', 	2014, 7716	, 6476,		8280,		16695,	6691,		7562],
     [ 'April',	2014, 10767	,	13590,	10055,	23653,	11458, 	9362],
     [ 'May',	2014, 10237	,	4800,		8300,		15417,	7015,		6002],
     [ 'June',	2014,  13985,	15055,	14069,	25598,	16953,	17642],
     [ 'July',	2014,  11620,	6960,		10568,	22637,	11253,	6309.5],
     [ 'August',	2014,  	8865,	7365,		6209,		18834,	9765,		9667],
     [ 'September',	2014,  15931,	14250,	14446,	33206,	14525,	15523],
     [ 'October',	2014, 26656,	26653,	31912,	56412,	29585,	29886],
     [ 'November',	2014, 12218,	17203,	18239,	34941,	17185,	21345],
     [ 'December',	2014, 18825,	20412,	19014,	52619,	20129,	24307]
     ]

         var filteredDataArray = [];
     filteredDataArray.push(dataArray[0]);
     if(year == 0){
         for (var i=1; i<dataArray.length; i++) {
           if(dataArray[i][1] == 2013){
               dataArray[i][0] = dataArray[i][0] + ' 2013';
           } else {
              dataArray[i][0] = dataArray[i][0] + ' 2014';
           }
           filteredDataArray.push(dataArray[i]);
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
     if(product != 0){
      for (var i = 6; i >= 1; i--) {
        if(i != product){
          data.removeColumn(i);
        }
  
     }
}

     var options = {
         legend: {
           position: 'top',
           maxLines: 3
         }
     };
           
     var chart = new google.visualization.LineChart(document.getElementById('prod_unit_graph'));
     chart.draw(data, options);
     
     
   }