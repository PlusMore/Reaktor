var getStateClass = function (state) {
  
  // if session state matches return true
  if (Session.get('state') === state) {
    return 'open';
  }

  return '';
}

var getCurrentRouteClass = function (routeName) {
  
  // if page is current route, also return true 
  if (Router.current().route.getName() === routeName) {
    return 'active';
  }

  return '';
}




Template.Navigation.helpers({
  currentRouteClass: function (routeName) {
    return getCurrentRouteClass(routeName);
  },
  stateClass: function(state) {
    return getStateClass(state);
  }
});

Template.Navigation.events({
  'click [data-state]': function (e, tmpl) {
    var currentState = Session.get('state');
    var state = tmpl.$(e.currentTarget).data('state');

    if (currentState === state) {
      Session.set('state', undefined);
    } else {
      Session.set('state', state);
    }
  }
});