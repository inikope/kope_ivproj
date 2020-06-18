google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawProdCountry);

function drawProdCountry() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Amarilla', 'Carretera', 'Montana', 'Paseo', 'Velo', 'VTT'],
        ['France',667867.63, 388864.895, 461238.37, 838748.56, 707930.235, 716371.09],
        ['Germany', 612137.26, 369674.68, 559438.37, 744416.74, 788789, 605932.77],
        ['Canada', 646861.375, 436105.34, 321867.03, 1265017.99, 370568.34, 488808.81],
        ['USA', 388626.405, 238491.55, 434521.8, 1020603.27, 265401, 647896.64],
        ['Mexico', 498611.39, 393668.42, 337689.31, 928651.39, 173303.89, 575598.71]
      ]);

      var options = {
        legend : { position: 'top', 
        						maxLines: 3},
        bar : { groupWidth: '75%' },
        isStacked: true
      };
      
      var chart = new google.visualization.BarChart(document.getElementById('prod_country_graph'));
      chart.draw(data, options);
    }