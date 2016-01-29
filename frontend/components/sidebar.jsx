var React = require('react');
var ReactRouter = require('react-router');

var History = require('react-router').History;

var Sidebar = React.createClass({

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
