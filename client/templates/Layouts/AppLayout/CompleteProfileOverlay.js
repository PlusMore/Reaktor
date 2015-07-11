Template.RequiredProfilePanel.events({
  'tap .js-new-photo': function(event, template) {
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
            'profile.picture': data,
            'profile.pictureThumbnail': data
          }
        }
      );
    });
  },
  'tap .js-continue': function(event, template) {
    var user = Meteor.user(),
        complete = false;

    try {

      var requiredInfo = _.pick(user.profile, ['firstName', 'lastName', 'picture']);
      check(requiredInfo, {
          firstName: String,
          lastName: String,
          picture: String
      });

      return Meteor.users.update(user._id, {$set: {'profile.reviewed': true}});
    } catch (e) {
      sAlert.error('Please enter required information.');
      return false;
    }
  }
});
