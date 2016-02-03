// this file will replace the current logic above yield in the application
// layout page.

var React = require('react');
var ReactRouter = require('react-router');
var SessionsApiUtil = require('./../util/sessions_api_util.js');
var CurrentUserStore = require('./../stores/current_user_store.js');
var Search = require('./search');

var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({ currentUser: CurrentUserStore.currentUser() });
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this._onChange);
    SessionsApiUtil.fetchCurrentUser();
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
  },

  render: function () {
    var currentUser = this.state.currentUser;

    return (
      <nav className="nav-bar group">
        <div className="nav-header group">
          <SidebarToggle />
          <a className="nav-logo" href="#/">Clickapedia</a>
          <ul className="nav-list">
            <li key="1"><CurrentUser currentUser={currentUser} /></li>
            <li key="2"><LogInOut currentUser={currentUser} /></li>
            <li key="3"><SearchToggle /></li>
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

    if (user.username) {
      link = <div><i className="fa fa-user"></i>{" " + user.username}</div>;
    } else {
      link = <div></div>;
    }

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

    if (user.username) {
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
    return (
      <div className="toggle-sidebar" onClick={this.toggleShow}>
        <i className="fa fa-bars"></i>
      </div>
    );
  }
});

var SearchToggle = React.createClass({

  toggleSearch: function () {
    alert("toggle Search");
  },

  render: function () {
    return (
      <a className="toggle-search" href="#/search">
        <i className="fa fa-search"></i>
      </a>
    );
  }
});

// var Sidebar = React.createClass({
//
//   render: function () {
//     var pageHeaders = ["header 1", "header 2", "header 3", "etc"];
//     var headerList = pageHeaders.map(function (header) {
//       return <li>{header}</li>;
//     });
//
//     return(
//     <div className="sidebar group">
//       <ul className="sidebar-list">
//         {headerList}
//       </ul>
//     </div>
//     );
//   }
// });

module.exports = NavBar;
