// This is the Homepage that displays what's new and various other things
// users might find interesting.

var React = require('react');
var ReactRouter = require('react-router');

var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');

var Article = require('./article.jsx');
var ArticleFragment = require('./article_fragment.jsx');
var WikiFetcher = require('./wiki_fetcher.jsx');

var History = require('react-router').History;

// this is the display logic for the main page.
// The main page should render an Article Fragment for the 20 most recent
// articles in the database.  Style the Article Fragments to be divs with fixed
// widths and heights, float them to the left with a margin of 20px, making them
// main page index a cool tilework of articles.

var ArticleIndex = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      title: new Date(),
      articles: [{title: "temp", body: "temp"}]
    });
  },

  componentDidMount: function () {
    this.articleListener = ArticleStore.addListener(this.__onChange);
    ApiUtil.fetchArticles();
  },

  __onChange: function () {
    var articles = ArticleStore.firstNArticles(10);
    this.setState({ title: new Date(), articles: articles });
  },

  componentWillUnmount: function () {
    this.articleListener.remove();
  },

  render: function () {

    var articles;

    if (this.state.articles) {
      articles = this.state.articles.map(function (article) {
        return (
          <li key={article.id}>
              <ArticleFragment article={article} />
          </li>
        );
      });
    } else {
      articles = <div>No articles to render</div>;
    }

    return (
      <div className="index group">
        <div className="wiki-fetcher">
          <WikiFetcher />
        </div>
        <ul className="articles-list">
          {articles}
        </ul>
      </div>
    );
  }
});

module.exports = ArticleIndex;
