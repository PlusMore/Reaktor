Session.setDefault('theme', 'theme-default');

Template.Layout.helpers({
  theme: function () {
    return Session.get('theme');
  }
});