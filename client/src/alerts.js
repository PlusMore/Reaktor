Meteor.startup(function () {

    sAlert.config({
        effect: 'stackslide',
        position: 'bottom',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });

});
