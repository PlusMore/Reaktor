// https://github.com/meteor/mobile-packages/blob/master/packages/mdg:reload-on-resume/README.md
Meteor.startup(function() {
  if (Meteor.isCordova) {
    Tracker.autorun(function() {
      var waiting = Reload.isWaitingForResume(),
          alertId;

      if (waiting) {
        alertId = sAlert.success('A new version is available. Restart the application to update.', {timeout: 'none'});
      }
    });
  }
});
