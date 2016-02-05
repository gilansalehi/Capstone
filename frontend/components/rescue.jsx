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

var Rescue = React.createClass({
  mixins: [History],

  render: function () {
    debugger
    return (
      <div className="rescue">
        <p>The article you are looking for is not in the database. Help us out by creating it!</p>

        <WikiFetcher />
      </div>
    );
  },
});

module.exports = Rescue;
