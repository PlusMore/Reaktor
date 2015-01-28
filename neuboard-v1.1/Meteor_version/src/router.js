Router.configure({
  layoutTemplate: 'Layout'
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('Dashboard', {});
});

Router.route('/ui-elements', function () {
  this.render('UIElements', {});
});