Session.setDefault('theme', 'theme-green');

Template.AppLayout.onRendered(function () {
  var template = this;

  App.UI.menu = new Slideout({
    'panel': template.$('#panel').get(0),
    'menu': template.$('#menu').get(0),
    'padding': 256,
    'tolerance': 70
  });
});

Template.AppLayout.helpers({
  theme: function() {
    return Session.get('theme');
  },
  ios: function() {
    return Session.get('iOS-standalone') ? 'ios' : '';
  }
});
