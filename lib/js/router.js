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
  name: 'ThemePreview',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Theme Preview');
    }
    this.next();
  }
});

Router.route('/blankpage', function () {
  this.render('BlankPage', {});
},{
  name: 'BlankPage',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Blank Page');
    }
    this.next();
  }
});

// Account

Router.route('/profile', function() {
  this.render('Profile', {});
},{
  name: 'Profile',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Profile');
    }
    this.next();
  }

});

// Errors

Router.route('/404', function () {
  this.layout('EmptyLayout');
  this.render('404', {});
},{
  name: 'Pages.404',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('404');
    }
    this.next();
  }
});

Router.route('/500', function () {
  this.layout('EmptyLayout');
  this.render('500', {});
},{
  name: 'Pages.500',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('500');
    }
    this.next();
  }
});

// UI Elements

Router.route('/ui-elements/buttons', function () {
  this.render('Buttons', {});
},{
  name: 'UI.Buttons',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Buttons');
    }
    this.next();
  }
});

Router.route('/ui-elements/sliders-and-progress', function () {
  this.render('SlidersAndProgress', {});
},{
  name: 'UI.SlidersAndProgress',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Sliders & Progress');
    }
    this.next();
  }
});

Router.route('/ui-elements/modals-and-popups', function () {
  this.render('ModalsAndPopups', {});
},{
  name: 'UI.ModalsAndPopups',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Modals & Popups');
    }
    this.next();
  }
});

Router.route('/ui-elements/tabs-and-accordions', function () {
  this.render('TabsAndAccordions', {});
},{
  name: 'UI.TabsAndAccordions',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Tabs & Accordions');
    }
    this.next();
  }
});

Router.route('/ui-elements/alerts-and-notifications', function () {
  this.render('AlertsAndNotifications', {});
},{
  name: 'UI.AlertsAndNotifications',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Alerts & Notifications');
    }
    this.next();
  }
});

Router.route('/ui-elements/panels', function () {
  this.render('Panels', {});
},{
  name: 'UI.Panels',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Panels');
    }
    this.next();
  }
});

Router.route('/ui-elements/icons', function () {
  this.render('Icons', {});
},{
  name: 'UI.Icons',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Icons');
    }
    this.next();
  }
});

Router.route('/ui-elements/typography', function () {
  this.render('Typography', {});
},{
  name: 'UI.Typography',
  onBeforeAction: function() {
    if (Meteor.isClient) {
      Meta.setTitle('Typography');
    }
    this.next();
  }
});

