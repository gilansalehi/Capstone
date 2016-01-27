var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;


// write the store first...

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
    ApiUtil.fetchArticles();
  },

  handleClick: function (e) {
    e.preventDefault();
    // var id = e.currentTarget......id
    // History.pushState(null, "/article/" + id, {})
    alert("You clicked the title");
  },

  __onChange: function () {
    console.log("there was a change!");
  },

  componentWillUnmount: function () {
    this.articleListener.remove();
  },

  render: function () {
    return (
      <div className="article">
        <h1 onClick={this.handleClick}>{this.state.title}</h1>
        <article>{this.state.body}</article>
      </div>
    );
  }
});

module.exports = Article;
