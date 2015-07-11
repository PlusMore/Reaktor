Template.RequiredProfilePanel.helpers({
  isCordova: function() {
    return Meteor.isCordova;
  }
});

Template.RequiredProfilePanel.events({
  'tap .js-new-photo': function(event, template) {

    if (!Meteor.isCordova) {
      // tons of different browser prefixes
      navigator.getUserMedia = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
        );

      if (! navigator.getUserMedia) {
        // no browser support, trigger file upload
        return template.$('input.take-photo-input').trigger('click');
      }
    }

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
  'tap .js-choose-photo': function() {
    if (Meteor.isCordova) {
      MeteorCamera.getPicture({width: 640, height: 640, sourceType: Camera.PictureSourceType.PHOTOLIBRARY}, function(error, data) {
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
    }
  },
  'change .take-photo-input': function(event, template) {
    if(event.target.files.length === 1 &&
       event.target.files[0].type.indexOf("image/") === 0) {
        var data = URL.createObjectURL(event.target.files[0]);
        Meteor.users.update(Meteor.userId(),
          {$set:
            {
              'profile.picture': data,
              'profile.pictureThumbnail': data
            }
          }
        );
    }
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
