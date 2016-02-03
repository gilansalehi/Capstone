var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var HeaderImage = require('./header_image.jsx');
var ImageStore = require('../stores/image_store');
var Article = require('./article');
var CurrentUserStore = require('../stores/current_user_store');

var History = require('react-router').History;

// this is the display logic for a single article.

var ArticleEditor = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      mode: "reading",
    });
  },

  toggleState: function () {
    if (this.state.mode === "reading") {
      this.setState({ mode: "editing" });
      $(".body").attr("contentEditable", "true");
    } else {
      this.setState({ mode: "reading" });
      $(".body").attr("contentEditable", "false");
      var ca = ArticleStore.fetchArticle();
      var body = $(".body").html();
      var author = CurrentUserStore.currentUser();
      ApiUtil.saveEditedArticle(ca.id, body, author.id);
    }
  },

  handleClick: function () {
    if (CurrentUserStore.currentUser()) {
      this.toggleState();
    } else {
      alert("Please log in.");
    }
  },

  render: function () {
    var icon;

    if (this.state.mode === "reading") {
      icon = <i className="fa fa-pencil"></i>;
    } else {
      icon = <i className="fa fa-floppy-o"></i>;
    }

    return (
      <div className="article-editor" onClick={this.handleClick}>{icon}</div>
    );
  }
});

module.exports = ArticleEditor;
