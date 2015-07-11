Template.SidebarProfile.helpers({
  user: function() {
    return Meteor.user();
  }
});

Template.SidebarProfile.events({
  'tap #logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});
