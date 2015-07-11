Session.setDefault('theme', 'theme-green');

Template.LoggedInLayout.onRendered(function () {
  var template = this;

  App.UI.menu = new Slideout({
    'panel': template.$('#panel').get(0),
    'menu': template.$('#menu').get(0),
    'padding': 256,
    'tolerance': 70,
    'grabWidth': 44
  });
});

Template.LoggedInLayout.helpers({
  theme: function() {
    return Session.get('theme');
  },
  ios: function() {
    return Session.get('iOS-standalone') ? 'ios' : '';
  },
  transition: function() {
    return function(from, to, element) {
      // if (to.template === 'Dashboard') {
      //   return 'left-to-right';
      // }
      return 'fade';
    };
  },
  profileComplete: function() {
    var user = Meteor.user(),
        complete = false;

    try {
      check(user.profile, {
          firstName: String,
          lastName: String,
          picture: String,
          reviewed: Boolean
      });
      return true;
    } catch (e) {
      return false;
    }

  }
});
