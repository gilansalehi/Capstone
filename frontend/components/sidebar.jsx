var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article');

var History = require('react-router').History;

var Sidebar = React.createClass({

  componentDidMount: function () {
    ArticleStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.forceUpdate();
  },

  handleMouseOver: function (i) {
    var $el = $(this.refs["scrollable" + i]);
    console.log(i);
  },

  render: function () {
    var tabs;
    console.log(this.props.path);

    if (ArticleStore.fetchArticle()) {
      tabs = JSON.parse(ArticleStore.fetchArticle().table_of_contents);
    } else {
      tabs = [ <a href='#/'>Main Page</a>,
               <a href='#/search'>Search</a>
             ];
    }

    var tabList = tabs.map(function (tab, i) {

      return (
        <div className="sidebar-list-item"
             key={i}
             dangerouslySetInnerHTML={{__html: tab}}
             ref={"scrollable" + i}
             onMouseOver={this.handleMouseOver.bind(this, i)}>
        </div>
      );
    }.bind(this));

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
