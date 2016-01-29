var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },

  deleteCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.DELETE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};

module.exports = CurrentUserActions;
