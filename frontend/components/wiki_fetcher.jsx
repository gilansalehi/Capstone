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
    this.setState({ value: event.target.value });
  },

  handleSubmit: function (title) {
    e.preventDefault();
    ApiUtil.fetchFromWikipedia(title);
  },

  render: function () {
    var value = this.state.value;
    return (
      <form>

        <label>wikiFetcher
          <input className="wiki-fetcher"
                 type="text"
                 onChange={this.handleChange}
                 onSubmit={this.handleSubmit}
                 value={value}>
          </input>
        </label>

        <input type="submit" onSubmit={this.handleSubmit}>Submit</input>
      </form>
    );
  },
});

module.exports = WikiFetcher;
