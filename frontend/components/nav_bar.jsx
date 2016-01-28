// this file will replace the current logic above yield in the application
// layout page.

var React = require('react');
var ReactRouter = require('react-router');

var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      logo: "Clickapedia",
      list: ["float-right"],
      sidebar: ["To Do..."]
    });
  },

  render: function () {
    return (
      <nav className="nav-bar group">
        <div className="nav-header group">
          <SidebarToggle />
          <a className="nav-logo" href="/">Clickapedia</a>
          <ul className="nav-list">
            <li key="1"><CurrentUser /></li>
            <li key="2"><LogInOut /></li>
          </ul>
        </div>
        <Sidebar />
      </nav>
    );
  }
});

var CurrentUser = React.createClass({
  render: function () {
    var links;
    var root = document.getElementById('root');
    var user = root.dataset.user;

    if (user) {
      links = <div>{user}</div>;
    } else {
      links = "";
    }

    return (
      <div>{links}</div>
    );
  }
});

var LogInOut = React.createClass({
  render: function () {
    var link;
    var root = document.getElementById('root');
    var user = root.dataset.user;

    if (user) {
      links = (
        <a href="/session/new">Log out</a> // make this actually work???
      );
    } else {
      links = <a href="/session/new">Log in</a>;
    }

    return (
      <div>{links}</div>
    );
  }
});

var SidebarToggle = React.createClass({
  getInitialState: function () {
    return ({ mode: "showing" });
  },

  toggleShow: function () {
    if (this.state.mode === "hiding") {
      this.show();
    } else {
      this.hide();
    }
    alert(this.state.mode);
  },

  hide: function () {
    this.setState({ mode: "hiding" });
  },

  show: function () {
    this.setState({ mode: "showing" });
  },

  render: function () {
    // var path = ['app', 'assets', 'images', 'icons'].join("/");
    // var img = 'book236.svg';
    // return <object type="image/svg+xml"
    //                data="book236.svg"></object>;
    return (
      <div className="toggle" onClick={this.toggleShow}>BOOK
        <i class="fa fa-bars"></i>
      </div>
    );
  }
});

var Sidebar = React.createClass({

  render: function () {
    var pageHeaders = ["header 1", "header 2", "header 3", "etc"];
    var headerList = pageHeaders.map(function (header) {
      return <li>{header}</li>;
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

module.exports = NavBar;
