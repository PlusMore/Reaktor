Template.AlertsAndNotifications.rendered = function () {
  Meteor.setTimeout(function() {
    Messenger().post("Thanks for checking out NeuBoard!");
  }, 1000);
};