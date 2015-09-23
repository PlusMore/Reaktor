Meteor.startup(function(){
  if (Meteor.isCordova) {
    if (device && device.platform && device.platform === 'iOS') {
      StatusBar.overlaysWebView(true);
      StatusBar.styleLightContent();
    } else {
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString(Meteor.settings.public.primaryColor);
      StatusBar.styleLightContent();
    }
  }
});
