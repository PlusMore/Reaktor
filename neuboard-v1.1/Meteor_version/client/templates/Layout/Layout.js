Session.setDefault('theme', 'theme-default');

Template.Layout.helpers({
  theme: function () {
    return Session.get('theme');
  },
  modalOpen: function() {
    // allow session variable for manual triggering of modal open
    var modalOpen = Session.get('modalOpen') || modal.open();
    return modalOpen ? 'modal-open' : '';
  }
});