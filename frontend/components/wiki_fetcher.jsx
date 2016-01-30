var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;

// this is the display logic for a single article.

var WikiFetcher = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({ value: "" });
  },

  handleChange: function (e) {
    this.setState({ value: e.target.value });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.fetchFromWikipedia(this.state.value);
  },

  render: function () {
    var value = this.state.value;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>wikiFetcher
          <input className="wiki-fetcher"
                 type="text"
                 onChange={this.handleChange}
                 value={value} />
        </label>

        <input type="submit" value="Fetch" />
      </form>
    );
  },
});

module.exports = WikiFetcher;
