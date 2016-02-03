var React = require('react');
var SearchResultsStore = require('../stores/search_results_store');
var SearchApiUtil = require('../util/search_api_util');
var ArticleFragment = require('./article_fragment');
var HeaderImage = require('./header_image');
var ImageStore = require('../stores/image_store');

var Search = React.createClass({
  componentDidMount: function () {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return { page: 1, query: "" };
  },

  _onChange: function () {
    this.forceUpdate();
  },

  setQuery: function (e) {
    this.setState({ query: e.currentTarget.value });
  },

  search: function (e) {
    e.preventDefault();
    var query = this.state.query;

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
      <div className="search-page">
        <form onSubmit={ this.search } className="search-form">
          <label> Search
            <input type="text"
                   placeholder="search articles"
                   onChange={ this.setQuery }
                   value={ this.state.query } />
            <input type="submit" className="submit" value="Search!" />
          </label>
        </form>

        <div className="search-info">
          <a onClick={ this.previousPage }><i className="fa fa-chevron-left"></i>&nbsp;</a>
          Displaying { SearchResultsStore.all().length } of { SearchResultsStore.meta().total_count || 0 }
          <a onClick={ this.nextPage }>&nbsp;<i className="fa fa-chevron-right"></i></a>
        </div>

        <ul className="articles-index">{ searchResults }</ul>
      </div>
    );
  },

});

module.exports = Search;
