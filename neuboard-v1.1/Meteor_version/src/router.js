Router.configure({
  layoutTemplate: 'Layout',
  loadingTemplate: 'Loading',
  notFoundTemplate: '404'
});

Router.route('/', function () {
  this.render('Dashboard', {});
},{
  name: 'Dashboard'
});

Router.route('/ui-elements/buttons', function () {
  this.render('Buttons', {});
},{
  name: 'UI.Buttons'
});

Router.route('/ui-elements/sliders-and-progress', function () {
  this.render('SlidersAndProgress', {});
},{
  name: 'UI.SlidersAndProgress'
});

Router.route('/css-animations', function () {
  this.render('CSSAnimations', {});
}, {
  name: 'CSSAnimations'
});