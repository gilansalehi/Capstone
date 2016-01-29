var CurrentUserActions = require("./../actions/current_user_actions");
var SessionApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
      error: function () {
        console.log("Log in failed.");
      }
    });
  },

  logout: function (currentUser, success) {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      data: currentUser,
      success: function (currentUser) {
        CurrentUserActions.deleteCurrentUser(currentUser);
        success && success();
      },
      error: function () {
        console.log("Log out failed.");
      }
    });
  },

  fetchCurrentUser: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        console.log("fetched current user");
        CurrentUserActions.receiveCurrentUser(currentUser);
        callback && callback();
      }
    });
  }

};

module.exports = SessionsApiUtil;
