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

    $.ajax({
      type: 'GET',
      url: urlString,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      headers: { 'Api-User-Agent': 'Clickapedia/0.0.1 (http://clickapedia.herokuapp.com/; gilansalehi@gmail.com)' },
      success: function(data) {
      },
      error: function (message) {
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
