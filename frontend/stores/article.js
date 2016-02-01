var Store = require('flux/utils').Store;
var ArticleConstants = require("../constants/article_constants");
var AppDispatcher = require("../dispatcher/dispatcher");


var ArticleStore = new Store(AppDispatcher);

var _articles = [];
var _currentArticle = [];

var resetArticles = function (articles) {
  _articles = articles.slice();
};

ArticleStore.all = function () {
  return _articles.slice();
};

ArticleStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ArticleConstants.ARTICLES_RECEIVED:
      resetArticles(payload.articles);
      ArticleStore.__emitChange();
      break;
    case ArticleConstants.ARTICLE_RECEIVED:
      if (_articles.indexOf(payload) === -1) { _articles.push(payload); }
      _currentArticle = payload;
      ArticleStore.__emitChange();
      break;
  }
};

ArticleStore.fetchArticle = function () {
  return _currentArticle.article;
};

ArticleStore.firstNArticles = function (n) {
  return _articles.slice(0, n);
};

ArticleStore.lastNArticles = function (n) {
  var k = _articles.length - n;
  if (k < 0) { k = 0; }
  return _articles.slice(k);
};

// for testing
window.ArticleStore = ArticleStore;

module.exports = ArticleStore;



// Masonry
