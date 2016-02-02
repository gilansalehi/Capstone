var React = require('react');
var SearchResultsStore = require('../stores/search_results_store');
var SearchApiUtil = require('../util/search_api_util');
var ArticleFragment = require('../components/article_fragment');

var Search = React.createClass({
  componentDidMount: function () {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return { page: 1, query: "" };
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);

    this.setState({ page: 1, query: query });
  },

  nextPage: function () {
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);

    this.setState({ page: nextPage });
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {

    var searchResults = SearchResultsStore.all().map(function (searchResult) {
      return <ArticleFragment article={ searchResult } />;
    });

    return (
      <div>
        <h1 className="title">Search</h1>
        <input type="text" placeholder="search articles" onKeyUp={ this.search } />
        Displaying { SearchResultsStore.all().length } of { SearchResultsStore.meta().totalCount }
        <button onClick={ this.nextPage }>Next</button>
        <ul className="articles-index">{ searchResults }</ul>
      </div>
    );
  },

});

module.exports = Search;
