var AppDispatcher = require('../dispatcher/dispatcher');
var SearchConstants = require('../constants/search_constants');

var SearchActions = {
  receiveResults: function (data) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.RECEIVE_SEARCH_RESULTS,
      data: data,
      meta: { total_count: data.total_count }
    });
  }
};

module.exports = SearchActions;
