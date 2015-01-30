var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
};

var getLineChartData = function() {
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: 'Network Usage',
            fillColor: 'rgba(26,188,156,0.5)',
            strokeColor: 'rgba(26,188,156,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }, {
            label: 'CPU Load',
            fillColor: 'rgba(31,123,182,0.5)',
            strokeColor: 'rgba(31,123,182,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }]
    };
    return lineChartData;
}

var getBarChartData = function() {
    var barChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            fillColor: 'rgba(26,188,156,0.5)',
            strokeColor: 'rgba(255,255,255,0.8)',
            highlightFill: 'rgba(26,188,156,1)',
            highlightStroke: 'rgba(255,255,255,0.8)',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }, {
            label: 'CPU Load',
            fillColor: 'rgba(31,123,182,0.5)',
            strokeColor: 'rgba(255,255,255,0.8)',
            highlightFill: 'rgba(31,123,182,1)',
            highlightStroke: 'rgba(255,255,255,0.8)',
            data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        }]
    };   

    return barChartData;
}

var initCharts = function() {
    var lineChartData = getLineChartData();
    var barChartData = getBarChartData();

    var ctx1 = document.getElementById("canvas1").getContext("2d");
    window.myLine = new Chart(ctx1).Line(lineChartData, {
        responsive: true
    });

    var ctx2 = document.getElementById("canvas2").getContext("2d");
    window.myBar = new Chart(ctx2).Bar(barChartData, {
        responsive: true
    });
}

Template.ServerStatsWidget.rendered = function () {
    initCharts();
};