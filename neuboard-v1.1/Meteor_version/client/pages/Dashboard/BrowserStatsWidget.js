var randomScalingFactor = function() {
    return Math.round(Math.random() * 100)
};

var getDoughnutData = function() {
    var doughnutData = [{
            value: 300,
            color: "#1ABC9C",
            highlight: "#1ABC9C",
            label: "Chrome"
        }, {
            value: 50,
            color: "#556B8D",
            highlight: "#556B8D",
            label: "IE"
        }, {
            value: 100,
            color: "#EDCE8C",
            highlight: "#EDCE8C",
            label: "Safari"
        }, {
            value: 40,
            color: "#CED1D3",
            highlight: "#1F7BB6",
            label: "Other"
        }, {
            value: 120,
            color: "#1F7BB6",
            highlight: "#1F7BB6",
            label: "Firefox"
        }
    ]; 

    return doughnutData;
}

var initCharts = function() {
    var doughnutData = getDoughnutData();

    var ctx3 = document.getElementById("doughnut-chart-area").getContext("2d");
    window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData, {
        responsive: true
    });
}

Template.BrowserStatsWidget.rendered = function () {
    initCharts();
};