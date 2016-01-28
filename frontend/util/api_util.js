var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchArticles: function (articles) {
    $.ajax({
      url: '/api/articles',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log("Fetched All Articles");
        ApiActions.allArticles(data);
      },
      error: function () {
        console.log("Error with fetchArticles");
      }
    });
  },

  fetchArticle: function (id) {
    // debugger
    $.ajax({
      url: '/api/articles/' + id,
      method: 'GET',
      dataType: 'json',
      success: function (article) {
        console.log("Fetched Article Successfully");
        ApiActions.addArticle(article);
      },
      error: function () {
        console.log("Error with fetchArticle");
      },
    });
  },

};

module.exports = ApiUtil;
