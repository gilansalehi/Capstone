var Store = require('flux/utils').Store;
var ArticleConstants = require("../constants/article_constants");
var AppDispatcher = require("../dispatcher/dispatcher");


var ArticleStore = new Store(AppDispatcher);

var _articles = [];

var resetArticles = function (articles) {
  console.log("Articles reset");
  _articles = articles.slice();
};

ArticleStore.all = function () {
  return _articles.slice();
};

ArticleStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticleConstants.ARTICLES_RECEVIED:
      var results = resetArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
  }
};

// for testing
window.ArticleStore = ArticleStore;

module.exports = ArticleStore;
