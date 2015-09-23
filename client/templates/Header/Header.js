Template.Header.events({
  'tap #toggle-left': function (e, tmpl) {
    e.preventDefault();
    e.stopPropagation();
    App.UI.menu.toggle();
  }
});
