Template.ModalsAndPopups.events({
  'click [data-toggle=modal]': function (e, tmpl) {
    var template = tmpl.$(e.currentTarget).data('target');
    modal.show(template);
  }
});