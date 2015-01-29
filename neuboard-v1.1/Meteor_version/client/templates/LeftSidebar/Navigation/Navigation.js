var getStateClass = function (state) {
  var currentState = Session.get('state') || "";

  // if session state matches return true
  if (currentState.indexOf(state) > -1) {
    return 'open';
  }

  return '';
}

var getSubnavStateClass = function (state) {
  var currentState = Session.get('state') || "";
  var collapsingState = Session.get('collapsing') || "";


  // if session state matches return true
  if (currentState.indexOf(state) > -1) {
    if (collapsingState.indexOf(state) > -1) {
      return 'collapsing'
    }
    return 'collapse in';
  }

  return 'collapse';
}

var getCurrentRouteClass = function (routeName) {
  
  // if page is current route, also return true 
  if (Router.current().route.getName().indexOf(routeName) > -1) {
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
  },
  navSubStateClass: function(state) {
    return getSubnavStateClass(state);
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

    // if toggle is open, then a section may need to be collapsed
    if (currentState) {
      Session.set('collapsing', state);
      Meteor.setTimeout(function() {
        Session.set('collapsing', undefined);
      });
    }
  }
});