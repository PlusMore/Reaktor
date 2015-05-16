Router.configure({
  layoutTemplate: 'AppLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: '404'
});

Router.route('/', function () {
  this.render('Dashboard', {});
},{
  name: 'Dashboard'
});

Router.route('/pages/404', function () {
  this.layout('EmptyLayout');
  this.render('404', {});
},{
  name: 'Pages.404'
});

Router.route('/pages/500', function () {
  this.layout('EmptyLayout');
  this.render('500', {});
},{
  name: 'Pages.500'
});

Router.route('/pages/accounts', function () {
  this.layout('EmptyLayout');
  this.render('Accounts', {});
},{
  name: 'Pages.Accounts'
});

Router.route('/css-animations', function () {
  this.render('CSSAnimations', {});
}, {
  name: 'CSSAnimations'
});
