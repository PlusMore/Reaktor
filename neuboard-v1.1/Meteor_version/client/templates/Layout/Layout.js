Session.setDefault('theme', 'theme-default');

Template.Layout.helpers({
  theme: function () {
    return Session.get('theme');
  },
  modalOpen: function() {
    // allow session variable for manual triggering of modal open
    if (!!modal.open()) {
      if (modal.hiding()) {
        return 'modal-hiding';
      }
      return 'modal-open';
    } else {
      return '';
    }
  }
});

