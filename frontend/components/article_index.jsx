// This is the Homepage that displays what's new and various other things
// users might find interesting.

var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var Article = require('./article.jsx');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;

// this is the display logic for the main page.

var ArticleIndex = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      title: new Date(),
      articles: "fetch the articles"
    });
  },

  componentDidMount: function () {
    this.articleListener = ArticleStore.addListener(this.__onChange);
    ApiUtil.fetchArticles();
  },

  handleClick: function (e) {
    e.preventDefault();
    // var id = e.currentTarget......id
    // History.pushState(null, "/article/" + id, {})
    alert("You clicked the title");
  },

  __onChange: function () {
    var articles = ArticleStore.firstNArticles(); // change to first n articles...
    console.log("there was a change!");
    // ApiUtil.fetchArticle();
    this.setState({ title: new Date(), articles: articles });
  },

  componentWillUnmount: function () {
    this.articleListener.remove();
  },

  render: function () {
    var articles = this.state.articles.map(function (article) {
      return (
        <li>
          <a href="">{article.title}</a>
        </li>
      );
    });
    return (
      <div className="index">
        <ul className="articles-list">
          {articles}
        </ul>
      </div>
    );
  }
});

module.exports = ArticleIndex;
