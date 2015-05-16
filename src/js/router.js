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

Router.route('/blankpage', function () {
  this.render('BlankPage', {});
},{
  name: 'BlankPage'
});

Router.route('/404', function () {
  this.layout('EmptyLayout');
  this.render('404', {});
},{
  name: 'Pages.404'
});

Router.route('/500', function () {
  this.layout('EmptyLayout');
  this.render('500', {});
},{
  name: 'Pages.500'
});
