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
        console.log(JSON.parse(data));
      },
      error: function (message) {
        console.log(message);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
