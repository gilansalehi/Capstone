var CurrentUserActions = require("./../actions/current_user_actions");

var SessionsApiUtil = {
  login: function (credentials, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
        console.log("login success");
      },
      error: function (msg) {
        console.log("login error");
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
      error: function (msg) {
        console.log(msg);
      }
    });
  },

  fetchCurrentUser: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        callback && callback();
      }
    });
  }

};

window.SessionsApiUtil = SessionsApiUtil;

module.exports = SessionsApiUtil;
