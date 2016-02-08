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
      // make the styler invisible.
    } else {
      this.setState({ mode: "reading" });
      $(".body").attr("contentEditable", "false");
      // make the syler visible.
      var ca = ArticleStore.fetchArticle();
      var body = $(".body").html();
      var author = CurrentUserStore.currentUser();
      var formData = new FormData();
      formData.append("article[body]", body);
      formData.append("article[author_id]", author.id);

      ApiUtil.saveEditedArticle(ca.id, formData);
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
      <div className="article-editor text" onClick={this.handleClick}>{icon}</div>
    );
  }
});

module.exports = ArticleEditor;
