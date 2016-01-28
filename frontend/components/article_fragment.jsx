var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;

// This file is a helper to render article teasers on the homepage.
// and perhaps at the end of other articles to show off related articles...
// MAKE SURE TO PASS AN ARTICLE AS A PROP TO THE FRAGMENT

var ArticleFragment = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      article: this.props.article,
      article_id: this.props.article.id,
      article_img: "OPTIONAL"
    });
  },

  // handleClick: function (e) {
  //   e.preventDefault();
  //   var id = this.state.article_id;
  //   this.history.pushState(null, "/article/" + id, {});
  // },

  render: function () {
    var title, fragment, id;

    if (this.state.article) {
      id = this.state.article.id;
      title = this.state.article.title;
      fragment = this.state.article.body.slice(0, 280) + "...";
    } else {
      title = "...";
      fragment = "...";
    }

    return (
      <a href={"#/article/" + id} className="article-fragment">
        <h2 className="frag-title">{title}</h2>
        <article className="frag-text">{fragment}</article>
      </a>
    );
  }
});

module.exports = ArticleFragment;
