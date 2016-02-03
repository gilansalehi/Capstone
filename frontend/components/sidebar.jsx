var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('./stores/article');

var History = require('react-router').History;

var Sidebar = React.createClass({

  componentDidMount: function () {
    ArticleStore.addListenter(this._onChange);
  },

  _onChange: function () {
    this.setState({ headers: ArticleStore._currentArticle().contents })
    debugger
  }

  render: function () {
    var pageHeaders = ["header 1", "header 2", "header 3", "etc"];
    var headerList = pageHeaders.map(function (header) {
      return <li key={header}>{header}</li>;
    });

    return(
    <div className="sidebar group">
      <ul className="sidebar-list">
        {headerList}
      </ul>
    </div>
    );
  }
});

module.exports = Sidebar;
