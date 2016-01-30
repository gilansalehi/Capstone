// this file will replace the current logic above yield in the application
// layout page.

var React = require('react');
var ReactRouter = require('react-router');
var SessionsApiUtil = require('./../util/sessions_api_util.js');
var CurrentUserStore = require('./../stores/current_user_store.js');

var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({ currentUser: CurrentUserStore.currentUser() });
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
    console.log(this.state);
  },

  render: function () {
    var currentUser = this.state.currentUser;

    return (
      <nav className="nav-bar group">
        <div className="nav-header group">
          <SidebarToggle />
          <a className="nav-logo" href="/">Clickapedia</a>
          <ul className="nav-list">
            <li key="1"><CurrentUser currentUser={currentUser} /></li>
            <li key="2"><LogInOut currentUser={currentUser} /></li>
          </ul>
        </div>
      </nav>
    );
  }
});

var CurrentUser = React.createClass({
  render: function () {
    var link;
    var user = this.props.currentUser;

    if (user) { link = <div>{user.username}</div>; }
    else { link = <div>no user</div>; }

    return (
      <div className="current-user">{link}</div>
    );
  }
});

var LogInOut = React.createClass({
  handleLogout: function () {
    SessionsApiUtil.logout();
  },

  render: function () {
    var user = this.props.currentUser;
    if (user.id) {
      links = (<a href="#/" onClick={this.handleLogout}>Log out</a>);
    } else {
      links = <a href="#/login">Log in</a>;
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
      <div className="toggle" onClick={this.toggleShow}>
        <i className="fa fa-bars"></i>
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
