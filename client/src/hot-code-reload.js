// https://github.com/meteor/mobile-packages/blob/master/packages/mdg:reload-on-resume/README.md

Tracker.autorun(function() {
  var waiting = Reload.isWaitingForResume(),
      alertId;

  if (waiting) {
    console.log('waiting for hot code reload.')
    alertId = sAlert.success('<a href="#" id="click-to-reload">A new version is available. Tap here to reload.</a>', {html: true, timeout: 'none'});
  }
});

Meteor.startup(function() {
  $(document).on('tap', '#click-to-reload', function() {
    window.location.reload();
  });
})

