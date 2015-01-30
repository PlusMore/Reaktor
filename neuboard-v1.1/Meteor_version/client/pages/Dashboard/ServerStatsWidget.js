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

// $(window).resize(function() {
//     initChart();
// });

// //Chart.js LineChart, BarChart, DoughnutChart
//     var chartJs = function() {
//         //Line Charts
        
//             //Bar Charts
//         var randomScalingFactor = function() {
//             return Math.round(Math.random() * 100)
//         };

//         //DoughnutChart
//         var doughnutData = [{
//                 value: 300,
//                 color: "#1ABC9C",
//                 highlight: "#1ABC9C",
//                 label: "Chrome"
//             }, {
//                 value: 50,
//                 color: "#556B8D",
//                 highlight: "#556B8D",
//                 label: "IE"
//             }, {
//                 value: 100,
//                 color: "#EDCE8C",
//                 highlight: "#EDCE8C",
//                 label: "Safari"
//             }, {
//                 value: 40,
//                 color: "#CED1D3",
//                 highlight: "#1F7BB6",
//                 label: "Other"
//             }, {
//                 value: 120,
//                 color: "#1F7BB6",
//                 highlight: "#1F7BB6",
//                 label: "Firefox"
//             }

//         ];



//         window.onload = function() {
            



//             var ctx3 = document.getElementById("doughnut-chart-area").getContext("2d");
//             window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData, {
//                 responsive: true
//             });

//         };

//     };