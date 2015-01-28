Router.configure({
  layoutTemplate: 'Layout'
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('Dashboard', {});
});

Router.route('/css-animations', function () {
  this.render('CSSAnimations', {});
});