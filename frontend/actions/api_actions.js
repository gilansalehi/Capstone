var AppDispatcher = require('../dispatcher/dispatcher');
var ArticleConstants = require('../constants/article_constants');

// var ApiActions = {
//   receiveAll: function(articles){
//     AppDispatcher.dispatch({
//       actionType: BenchConstants.BENCHES_RECEIVED,
//       benches: benches
//     });
//   }
// };

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
  }
};

module.exports = ApiActions;
