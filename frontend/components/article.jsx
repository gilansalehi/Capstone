var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;

// this is the display logic for a single article.

var Article = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      title: "Article Title...",
      body: "Article Body..."
    });
  },

  componentDidMount: function () {
    this.articleListener = ArticleStore.addListener(this.__onChange);
    ApiUtil.fetchArticle(this.props.params.article_id);
  },

  __onChange: function () {
    var article = ArticleStore.fetchArticle();
    console.log("got a new article");
    this.setState({ title: article.title, body: article.body });
  },

  componentWillUnmount: function () {
    this.articleListener.remove();
  },

  render: function () {
    return (
      <div className="article">
        <h1>{this.state.title}</h1>
        <article>{this.state.body}</article>
      </div>
    );
  }
});

module.exports = Article;
