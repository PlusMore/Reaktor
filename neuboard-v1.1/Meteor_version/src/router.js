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

Router.route('/ui-elements/modals-and-popups', function () {
  this.render('ModalsAndPopups', {});
},{
  name: 'UI.ModalsAndPopups'
});

Router.route('/ui-elements/tabs-and-accordions', function () {
  this.render('TabsAndAccordions', {});
},{
  name: 'UI.TabsAndAccordions'
});

Router.route('/ui-elements/alerts-and-notifications', function () {
  this.render('AlertsAndNotifications', {});
},{
  name: 'UI.AlertsAndNotifications'
});

Router.route('/ui-elements/nestable-lists', function () {
  this.render('NestableLists', {});
},{
  name: 'UI.NestableLists'
});

Router.route('/ui-elements/panels', function () {
  this.render('Panels', {});
},{
  name: 'UI.Panels'
});

Router.route('/ui-elements/icons', function () {
  this.render('Icons', {});
},{
  name: 'UI.Icons'
});

Router.route('/ui-elements/typography', function () {
  this.render('Typography', {});
},{
  name: 'UI.Typography'
});

Router.route('/css-animations', function () {
  this.render('CSSAnimations', {});
}, {
  name: 'CSSAnimations'
});