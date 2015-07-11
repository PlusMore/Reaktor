Template.RequiredProfilePanel.helpers({
  isContinueDisabled: function () {
    var user = Meteor.user();

    try {
      check(user.profile, {
          firstName: String,
          lastName: String,
          picture: String
      });

      return false;
    } catch (e) {
      return true;
    }
  }
});

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
            'profile.picture': data
          }
        }
      );
    });
  },
  'tap .js-continue': function(event, template) {
    var user = Meteor.user(),
        complete = false;

    try {
      check(user.profile, {
          firstName: String,
          lastName: String,
          picture: String
      });

      return Meteor.users.update(user._id, {$set: {'profile.reviewed': true}});
    } catch (e) {
      return false;
    }
  }
});
