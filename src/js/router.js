Router.configure({
  layoutTemplate: 'AppLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: '404'
});

var filters = {
  scroll: function() {
    Meteor.setTimeout(function() {
      $('.main').animate({
        scrollTop: 0
      }, 400);
    });
    this.next();
  },
  closeMenu: function() {
    Meteor.setTimeout(function() {
      App.UI.menu && App.UI.menu.close();
    });
    this.next();
  }
};

if (Meteor.isClient) {
  Router.onRun(filters.scroll);
  Router.onBeforeAction(filters.closeMenu);
}

Router.route('/', function () {
  this.render('ThemePreview', {});
},{
  name: 'ThemePreview'
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

// UI Elements

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

