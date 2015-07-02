// See meteor accounts documentation docs.meteor.com

Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
      options.profile.pictureThumbnail = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
      options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      user.profile = options.profile;
  }
  return user;
});
