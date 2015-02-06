Template.ChartsC3Zoom.rendered = function () {

  var zoomChart = c3.generate({
     bindto: '#zoom',
    data: {
      columns: [
        ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
      ],
      colors: {
        sample: App.colors.primary,
      }
    },
    zoom: {
      enabled: true
    }
  });

};