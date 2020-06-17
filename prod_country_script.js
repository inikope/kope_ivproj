google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Paseo', 'VTT', 'Amarilla', 'Velo', 'Montana', 'Carretera'],
        ['France', 838748.56, 716371.09, 667867.63, 707930.235, 461238.37, 388864.895],
        ['Germany', 744416.74, 605932.77, 612137.26, 788789, 559438.37, 369674.68],
        ['Canada', 1265017.99, 488808.81, 646861.375, 370568.34, 321867.03, 436105.34],
        ['USA', 1020603.27, 647896.64, 388626.405, 265401, 434521.8, 238491.55],
        ['Mexico', 928651.39, 575598.71, 498611.39, 173303.89, 337689.31, 393668.42]
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