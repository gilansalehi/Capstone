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
  },

  render: function () {
    var tabs;
    var tabsList;

    if (this.props.path.pathname.slice(0, 9) === "/article/") {
      if (ArticleStore.fetchArticle() && ArticleStore.fetchArticle().table_of_contents) {
        tabsList = JSON.parse(ArticleStore.fetchArticle().table_of_contents);

        tabs = tabsList.map(function (tab, i) {
          return (
            <div className="sidebar-list-item"
              key={i}
              dangerouslySetInnerHTML={{__html: tab}}
              ref={"scrollable" + i}
              onMouseOver={this.handleMouseOver.bind(this, i)}>
            </div>
          );
        }.bind(this));

      }

    } else {

      tabsList = [
        <a href='#/'>Main Page</a>,
        <a href='#/search'>Search</a>
      ];

      tabs = tabsList.map(function (tab, i) {
        return (<div className="sidebar-list-item" key={i}>{tab}</div>);
      });

    }

    return(
      <div className="sidebar group">
        <ul className="sidebar-list">
          {tabs}
        </ul>
      </div>
    );
  }
});

// var SidebarItem = React.createClass({
//   componentDidMount: function () {
//     $(".scroll_on_hover").mouseover(function() {
//       $(this).removeClass("ellipsis");
//       var maxscroll = $(this).width();
//       var speed = maxscroll * 15;
//       $(this).animate({
//           scrollLeft: maxscroll
//       }, speed, "linear");
//     });
//
//     $(".scroll_on_hover").mouseout(function() {
//       $(this).stop();
//       $(this).addClass("ellipsis");
//       $(this).animate({
//           scrollLeft: 0
//       }, 'slow');
//     });
//   },
//
//   render: function () {
//
//   }
//
// });

module.exports = Sidebar;
