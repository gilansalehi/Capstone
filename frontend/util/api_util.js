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

    var urlString = "https://en.wikipedia.org/wiki/" + title;

    $.ajax({
      type: 'POST',
      url: '/api/fetcher',
      dataType: "json",
      data: { url: urlString },
      success: function(data) {
        ApiActions.addArticle(data);
      },
      error: function (message) {
        // console.log(message);
      }
    });
  },

  fetchHeaderImage: function (title) {
    var fixedTitle = "";
    for (var i = 0; i < title.length; i++) {
      if (title[i] === " ") { fixedTitle += "%20"; }
      else { fixedTitle += title[i]; }
    }

    console.log(fixedTitle);

    var host = "http://www.bing.com/images/search?";
    var page = "pq=" + fixedTitle;
    var thing = "&sc=8-4&sp=-1&sk=&q=" + fixedTitle;
    var size = "&qft=+filterui:imagesize-wallpaper";
    var license = "+filterui:license-L1&FORM=R5IR38";

    // "http://www.bing.com/images/search?pq=nasa&sc=8-4&sp=-1&sk=&q=NASA&qft=+filterui:imagesize-large+filterui:license-L1&FORM=R5IR38"
    var urlString = host + page + thing + size + license;
    $.ajax({
      type: 'POST',
      url: '/api/fetcher/header',
      dataType: "json",
      data: { url: urlString },
      success: function(data) {
        ApiActions.addHeaderImage(data);
      },
      error: function (message) {
        debugger
        console.log("Error with fetching header image");
      }
    });
  }

};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
