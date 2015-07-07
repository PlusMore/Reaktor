// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.reaktor.boilerplate',
  name: 'Reaktor',
  description: 'Reaktor boilerplate.',
  author: 'Patrick Scott',
  email: 'pat@patscott.io',
  website: 'https://patscott.io'
});

App.configurePlugin('com.phonegap.plugins.facebookconnect', {
    APP_ID: '102283436784797',
    APP_NAME: '07da7e5d7a4c21a6389dc3fd600b3956'
});

App.icons({
  'iphone': 'resources/icons/ios/app/icon-60px.png',
  'iphone_2x': 'resources/icons/ios/app/icon-60px@2x.png',
  'iphone_3x': 'resources/icons/ios/app/icon-60px@3x.png',

  'ipad': 'resources/icons/ios/app/icon-72px.png',
  'ipad_2x': 'resources/icons/ios/app/icon-72px@2x.png',

  'android_ldpi': 'resources/icons/android/app/icon-36px.png',
  'android_mdpi': 'resources/icons/android/app/icon-48px.png',
  'android_hdpi': 'resources/icons/android/app/icon-72px.png',
  'android_xhdpi': 'resources/icons/android/app/icon-96px.png'
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/ios/Default.png', // 320x480
  'iphone_2x': 'resources/splash/ios/Default@2x.png', // 640x960

  'iphone5': 'resources/splash/ios/Default-568h@2x.png', // 640x1136

  'iphone6': 'resources/splash/ios/Default~iphone6.png', // 750x1334

  'iphone6p_portrait': 'resources/splash/ios/Default~iphone6p.png', // 1242x2208
  'iphone6p_landscape': 'resources/splash/ios/Default-Landscape~iphone6p.png', // 2208x1242

  'ipad_portrait': 'resources/splash/ios/Default~ipad.png', // 768x1004
  'ipad_portrait_2x': 'resources/splash/ios/Default@2x~ipad.png', // 1536x2008

  'ipad_landscape': 'resources/splash/ios/Default-Landscape~ipad.png', // 1024x748
  'ipad_landscape_2x': 'resources/splash/ios/Default-Landscape@2x~ipad.png', // 2048x1496

  // Android
  'android_ldpi_portrait': 'resources/splash/android/200x320.png',
  'android_ldpi_landscape': 'resources/splash/android/320x200.png',

  'android_mdpi_portrait': 'resources/splash/android/320x480.png',
  'android_mdpi_landscape': 'resources/splash/android/480x320.png',

  'android_hdpi_portrait': 'resources/splash/android/480x800.png',
  'android_hdpi_landscape': 'resources/splash/android/800x480.png',

  'android_xhdpi_portrait': 'resources/splash/android/720x1280.png',
  'android_xhdpi_landscape': 'resources/splash/android/1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('StatusBarStyle', 'blackopaque');

var accessRule = function(domain, allowHttp) {
  if (allowHttp) {
    var origin = "http://" + domain; // this should only be allowed when over http, don't know how to do that though
    App.accessRule(origin);
    var wsOrigin = "ws://" + domain;
    App.accessRule(wsOrigin);
  }

  var secureOrigin = "https://" + domain;
  App.accessRule(secureOrigin);

  var wssOrigin = "ws://" + domain;
  App.accessRule(wssOrigin);
};

var trustedSecure = [
  'fontastic.s3.amazonaws.com',
  '*.filepicker.io',
  '*.googleapis.com',
  '*.gstatic.com',
  '*.cloudfront.net',
  '*.kadira.io',
  '*.mxpnl.com',
  '*.yelpcdn.com',
  '*.facebook.com',
  '*.akamaihd.net'
];

var trustedBoth = [
  '*.facebook.com',
];

trustedSecure.forEach(function (trustedDomain) {
  accessRule(trustedDomain, false);
});

trustedBoth.forEach(function (trustedDomain) {
  accessRule(trustedDomain, true);
});





