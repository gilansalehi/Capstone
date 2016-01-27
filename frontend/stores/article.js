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
  console.log("Store got a dispatch...");
  switch (payload.actionType) {
    case ArticleConstants.ARTICLES_RECEIVED:
      console.log("Store got the articles!");
      resetArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
  }
};

ArticleStore.firstArticle = function () {
  return _articles[0];
};

ArticleStore.firstNArticles = function (n) {
  return _articles.slice(0, n);
};
// for testing
window.ArticleStore = ArticleStore;

module.exports = ArticleStore;



// Masonry
