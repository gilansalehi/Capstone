var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');

var SearchActions = {
  receiveUser: function (data) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.RECEIVE_SEARCH_RESULTS,
      data: data
    });
  }
};

module.exports = SearchActions;
