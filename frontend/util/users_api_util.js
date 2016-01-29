var UserActions = require('../actions/user_actions');

var UsersApiUtil = {
  fetchUser: function (id) {
    $.ajax({
      url: '/api/users/' + id,
      type: 'GET',
      dataType: 'json',
      success: function (user) {
        UserActions.receiveUser(user);
      },
      error: function (msg) {
        console.log("fetch user failed");
        console.log(msg);
      }
    });
  },

  createUser: function (attrs, callback) {
    $.ajax({
      url: '/api/users',
      method: 'POST',
      dataType: 'json',
      data: attrs,
      success: function (user) {
        UserActions.receiveUser(user);
        CurrentUserActions.receiveCurrentUser();
        callback && callback();
      },
      error: function (msg) {
        console.log("create user failed");
        console.log(msg);
      }
    });
  }
}

module.exports = UsersApiUtil;
