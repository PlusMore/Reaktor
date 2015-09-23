Template.Notifications.events({
  'tap .btn-danger': function () {
    sAlert.error('This is an error.');
  },
  'tap .btn-warning': function () {
    sAlert.warning('This is a warning.');
  },
  'tap .btn-info': function () {
    sAlert.info('This is informational.');
  },
  'tap .btn-success': function () {
    sAlert.success('Yay! Success!');
  }
});
