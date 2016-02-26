var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var ApiActions = require('../actions/api_actions.js');
var Article = require('./article.jsx');
var History = require('react-router').History;


var ArticleTeaser = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      article: this.props.article,
    });
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ article: newProps.article });
  },

  render: function () {
    var article = this.state.article;
    return (
      <a href={"#/article/" + this.state.article.id}
         className="pinned-article group"
         background-image={"url(" + article.image + ")"}
         background-size="cover">
        <h2>{article.title}</h2>
        <article dangerouslySetInnerHTML={{__html: this.state.article.body}}></article>
      </a>
    );
  }
});

module.exports = ArticleTeaser;
