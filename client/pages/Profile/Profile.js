Template.Profile.helpers({
  user: function () {
    return Meteor.user();
  },
  userCanEdit : function() {
    return this._id === Meteor.userId();
  }
});
