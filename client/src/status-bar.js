Meteor.startup(function(){
  if (Meteor.isCordova) {
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString(Meteor.settings.public.primaryColor);
    StatusBar.styleLightContent();
  }
});
