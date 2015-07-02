Template.SidebarProfile.helpers({
  user: function() {
    return Meteor.user();
  },
  displayName: function() {
    return Meteor.user().profile.fullName || 'Your Account';
  }
});

Template.SidebarProfile.events({
  'tap #logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});
