var SHOW_CONNECTION_ISSUE_KEY = 'showConnectionIssue';
Session.setDefault(SHOW_CONNECTION_ISSUE_KEY, false);

var CONNECTION_ISSUE_TIMEOUT = 1000;

Meteor.startup(function () {
  setTimeout(function () {
    Session.set(SHOW_CONNECTION_ISSUE_KEY, true);
  }, CONNECTION_ISSUE_TIMEOUT);
});


Template.connected.helpers({
  connected: function() {
    if (Session.get(SHOW_CONNECTION_ISSUE_KEY)) {
      return Meteor.status().connected;
    } else {
      return true;
    }
  }
});