var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');
var Store = require('flux/utils').Store;

var _currentUser = false;
var _currentUserHasBeenFetched = false;

var CurrentUserStore = new Store(AppDispatcher);

CurrentUserStore.currentUser = function () {
  if (_currentUser) {
    return $.extend({}, _currentUser);
  } else {
    return _currentUser;
  }
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.userHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

CurrentUserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      console.log("current user store received current user");
      console.log(payload.currentUser);
      _currentUserHasBeenFetched = true;
      _currentUser = payload.currentUser;
      CurrentUserStore.__emitChange();
      break;
    case CurrentUserConstants.DELETE_CURRENT_USER:
      _currentUserHasBeenFetched = false;
      _currentUser = false;
      CurrentUserStore.__emitChange();
      break;
  }
};

window.CurrentUserStore = CurrentUserStore;

module.exports = CurrentUserStore;
