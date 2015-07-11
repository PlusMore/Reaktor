randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

Meteor.users.helpers({
  displayName: function() {
    var user = this;
    if (user) {
      if (typeof user.profile !== 'undefined' && user.profile.name) {
        return user.profile.name;
      }
      else if (typeof user.profile !== 'undefined' && user.profile.firstName) {
        if (user.profile.lastName) {
          return user.profile.firstName + user.profile.lastName;
        }
        return user.profile.first;
      }
      else if (user.username) {
        return user.username;
      }
      else if (user.emails[0].address) {
        return user.emails[0].address;
      }
      else {
        return 'Your Account';
      }
    }
  },
  picture: function() {
    var user = this;
    if (user) {
      if (user.profile && user.profile.picture) {
        return user.profile.picture;
      } else {
        return 'img/avatar1.png';
      }
    }
  },
  thumbnail: function() {
    var user = this;
    if (user) {
      if (user.profile && user.profile.pictureThumbnail) {
        return user.profile.pictureThumbnail;
      } else {
        return 'img/avatar1.png';
      }
    }
  }
});
