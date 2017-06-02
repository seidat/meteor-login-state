Meteor.startup(function() {
  if (window.location.protocol !== 'https:' && Meteor.settings.public.server !== 'localhost') {
    // Only set cookies on https, because http unsets it
    return;
  }

  var config = Meteor.settings && Meteor.settings.public &&
    Meteor.settings.public.loginState;

  if(config) {
    var getCustomData = null;
    if (LoginState.getCustomData) {
      getCustomData = LoginState.getCustomData;
    }

    LoginState.init(
      config.domain, config.cookieName, config.maxage, getCustomData
    );
  }
});
