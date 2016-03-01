var React = require('react');
var ReactRouter = require('react-router');

var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');

var Article = require('./article.jsx');
var ArticleFragment = require('./article_fragment.jsx');
var ArticleTeaser = require('./article_teaser.jsx');
var WikiFetcher = require('./wiki_fetcher.jsx');

var History = require('react-router').History;

var ArticleIndex = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      title: new Date(),
      articles: [{title: "Loading...", body: "This will only take a moment."}],
      pinned: [{title: "Loading...", body: "This will only take a moment."}]
    });
  },

  componentDidMount: function () {
    this.articleListener = ArticleStore.addListener(this.__onChange);
    ApiUtil.fetchArticles();
    ApiUtil.fetchPinnedArticle(1);
  },

  __onChange: function () {
    var articles = ArticleStore.firstNArticles(12);
    var pinned = ArticleStore.pinnedArticle();
    this.setState({ title: new Date(), articles: articles, pinned: pinned });
  },

  componentWillUnmount: function () {
    this.articleListener.remove();
    console.log("listener removed")
  },

  render: function () {
    var articles;
    var pinnedArticle = this.state.pinned;

    if (this.state.articles) {
      articles = this.state.articles.map(function (article, i) {
        return (
          <li key={i}>
            <ArticleFragment key={i} article={article} />
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
        <ArticleTeaser key="pinned" article={pinnedArticle} />
        <ul className="articles-list">
          {articles}
        </ul>
      </div>
    );
  }
});

module.exports = ArticleIndex;
