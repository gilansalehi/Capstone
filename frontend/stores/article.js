var Store = require('flux/utils').Store;
var ArticleConstants = require("../constants/article_constants");
var AppDispatcher = require("../dispatcher/dispatcher");


var ArticleStore = new Store(AppDispatcher);

var _articles = [];
var _currentArticle = [];
var _pinnedArticle = [];

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
    case ArticleConstants.PINNED_ARTICLE_RECEIVED:
      _pinnedArticle = payload;
      ArticleStore.__emitChange();
      break;
    case ArticleConstants.ARTICLE_RECEIVED:
      if (_articles.indexOf(payload) === -1) { _articles.push(payload.article); }

      _articles.sort(function(a, b) {
        if (a.updated_at > b.updated_at) { return -1; }
        else if (a.updated_at < b.updated_at) { return 1; }
        else { return 0; }
      });

      var titles = _articles.map( function (article) {
        return article.title;
      });

      console.log(titles);

      console.log("Article received: " + payload.article.title);
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

ArticleStore.pinnedArticle = function () {
  return _pinnedArticle.article;
};

ArticleStore.lastNArticles = function (n) {
  var k = _articles.length - n;
  if (k < 0) { k = 0; }
  return _articles.slice(k);
};

ArticleStore.currentArticle = function () {
  return _currentArticle;
};

module.exports = ArticleStore;



// Masonry
