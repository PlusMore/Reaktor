var isActive = function (state) {
  // if session state matches return true
  if (Session.get('state') === state) {
    return true;
  }

  // if page is current route, also return true 
  if (Router.current().route.getName() === state) {
    return true;
  }

  return false;
}



Template.Navigation.helpers({
  isActive: function(state) {
    if (isActive(state)) {
      return 'active';
    }
  }
});

Template.Navigation.events({
  'click [data-state]': function (e, tmpl) {
    var state = tmpl.$(e.currentTarget).data('state');
    Session.set('state', state);
  }
});