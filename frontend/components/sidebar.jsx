var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article');

var History = require('react-router').History;

var Sidebar = React.createClass({

  componentDidMount: function () {
    ArticleStore.addListener(this._onChange);
  },

  _onChange: function () {
  },

  render: function () {
    var tabs;

    debugger

    if (ArticleStore.fetchArticle()) {
      tabs = ArticleStore.fetchArticle().table_of_contents;
    } else {
      tabs = [ <a href="#/">Main Page</a>,
               <a href="#/search">Search</a>
             ];
    }
    debugger

    var tabList = tabs.map(function (tab) {
      return <li key={tab}>{tab}</li>;
    });

    return(
    <div className="sidebar group">
      <ul className="sidebar-list">
        {tabList}
      </ul>
    </div>
    );
  }
});

module.exports = Sidebar;
