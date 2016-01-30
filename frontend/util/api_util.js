var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchArticles: function (articles) {
    $.ajax({
      url: '/api/articles',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        ApiActions.allArticles(data);
      },
      error: function () {
      }
    });
  },

  fetchArticle: function (id) {
    $.ajax({
      url: '/api/articles/' + id,
      method: 'GET',
      dataType: 'json',
      success: function (article) {
        ApiActions.addArticle(article);
      },
      error: function () {
      },
    });
  },

  fetchFromWikipedia: function (title) {
    var host = "https://en.wikipedia.org/w/api.php?";
    var action = "action=parse&";
    var page = "page=" + title;
    var format = "&format=json";
    var origin = "&origin=localhost:3000";

    var urlString = host + action + page + format;
    var urlString2 = "https://en.wikipedia.org/wiki/" + title;

    $.ajax({
      type: 'POST',
      url: '/api/fetcher',
      dataType: "json",
      data: { url: urlString2 },
      success: function(data) {
        ApiActions.addArticle(data);
      },
      error: function (message) {
        console.log(message);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
