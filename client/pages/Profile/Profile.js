Template.Profile.helpers({
  user: function () {
    return Meteor.user();
  },
  userCanEdit : function() {
    return this._id === Meteor.userId();
  }
});


// TODO: Allow image cropping and resizing
// http://tympanus.net/codrops/2014/10/30/resizing-cropping-images-canvas/
Template.Profile.events({
  'tap .image-wrap': function() {
    MeteorCamera.getPicture({width: 640, height: 640}, function(error, data) {
      if (error) {
        if (error.error === 'browserNotSupported') {
          return;
        } else {
          sAlert.error(error.reason);
        }
      }

      Meteor.users.update(Meteor.userId(),
        {$set:
          {
            'profile.picture': data
          }
        }
      );
    });
  }
});
