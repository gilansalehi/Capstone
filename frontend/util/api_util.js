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

    var fixedTitle = "";
    for (var i = 0; i < title.length; i++) {
      if (title[i] === " ") { fixedTitle += "_"; }
      else { fixedTitle += title[i]; }
    }

    var urlString = "https://en.wikipedia.org/wiki/" + fixedTitle;

    $.ajax({
      type: 'POST',
      url: '/api/fetcher',
      dataType: "json",
      data: { url: urlString },
      success: function(data) {
        ApiActions.addArticle(data);
      },
      error: function (message) {
        console.log("No such article found on Wikipedia.");
      }
    });
  },

  setHeaderImage: function (image) {
    ApiActions.addHeaderImage(image);
  },

  fetchHeaderImage: function (title) {
    var fixedTitle = "";
    for (var i = 0; i < title.length; i++) {
      if (title[i] === " ") { fixedTitle += "%20"; }
      else { fixedTitle += title[i]; }
    }

    var host = "http://www.bing.com/images/search?";
    var page = "pq=" + fixedTitle;
    var thing = "&sc=8-4&sp=-1&sk=&q=" + fixedTitle;
    var size = "&qft=+filterui:imagesize-wallpaper";
    var license = "+filterui:license-L1&FORM=R5IR38";

    var urlString = host + page + thing + size + license;
    // var urlString = host + page + thing + size + license;

    $.ajax({
      type: 'POST',
      url: '/api/fetcher/header',
      dataType: "json",
      data: { url: urlString },
      success: function(data) {
        ApiActions.addHeaderImage(data);
      },
      error: function (message) {
        console.log("Error with fetching header image");
      }
    });
  },

  createNewArticle: function (attrs) {

    $.ajax({
      type: 'POST',
      url: '/api/articles',
      dataType: 'json',
      data: { article: attrs },
      success: function (article) {
        ApiActions.addArticle(article);
      },
      error: function (msg) {
        console.log("error with saving edited article");
      }
    });
  },

  saveEditedArticle: function (id, formData, callback) {

    $.ajax({
      type: 'PATCH',
      url: '/api/articles/' + id,
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false,
      success: function (article) {
        ApiActions.addArticle(article);
        callback && callback();
      },
      error: function (msg) {
        console.log("error with saving edited article");
      }
    });
  },

  goToUserPage: function (id) {

    $.ajax({
      type: 'GET',
      url: '/api/users/' + id,
      dataType: 'json',
      success: function (article) {
        debugger
        ApiActions.addArticle(article);
      },
      error: function (msg) {
        debugger
      }
    });
  }

};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
