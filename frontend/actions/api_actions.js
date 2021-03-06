var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/article_constants');
var ImageConstants = require('../constants/image_constants');

var ApiActions = {
  allArticles: function (articles) {
    AppDispatcher.dispatch({
      actionType: ArticleConstants.ARTICLES_RECEIVED,
      articles: articles
    });
  },

  addArticle: function (article) {
    AppDispatcher.dispatch({
      actionType: ArticleConstants.ARTICLE_RECEIVED,
      article: article,
    });
  },

  addPinnedArticle: function (article) {
    AppDispatcher.dispatch({
      actionType: ArticleConstants.PINNED_ARTICLE_RECEIVED,
      article: article,
    });
  },

  addHeaderImage: function (url) {
    AppDispatcher.dispatch({
      actionType: ImageConstants.HEADER_IMAGE_RECEIVED,
      image: url
    });
  },

};

module.exports = ApiActions;
