var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var History = require('react-router').History;

var Article = require('./components/article.jsx');
var ArticleIndex = require('./components/article_index.jsx');
var ArticleStore = require('./stores/article.js');
var NavBar = require('./components/nav_bar.jsx');
var Sidebar = require('./components/sidebar.jsx');
var SessionForm = require('./components/sessions/new.jsx');
var UserForm = require('./components/users/new.jsx');
var UserShow = require('./components/users/users_show.jsx');
var Search = require('./components/search');
var Rescue = require('./components/rescue');

var CurrentUserStore = require('./stores/current_user_store');
var SessionsApiUtil = require('./util/sessions_api_util');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <div className="main group">
          <div className="sidebar">
            <Sidebar path={this.props.location} />
          </div>
          <content className="content group">
            {this.props.children}
          </content>
        </div>
      </div>
    );
  }
});


function _checkCurrentUser() {
  SessionsApiUtil.fetchCurrentUser();
};

// function _ensureLoggedIn(nextState, replace, callback) {
//
//   function _redirectIfNotLoggedIn() {
//     if (!CurrentUserStore.isLoggedIn()) {
//       replace({}, "/login");
//     }
//     callback();
//   }
//
//   // CurrentUserStore.userHasBeenFetched() ? _redirectIfNotLoggedIn() : SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn)
//   if (CurrentUserStore.userHasBeenFetched()) {
//     _redirectIfNotLoggedIn();
//   } else {
//     SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
//   }
// };

var routes = (
  <Route path="/" component={ App } >
    <IndexRoute component={ ArticleIndex } onEnter={ _checkCurrentUser } />
    <Route path="article/:article_id" component={ Article } />

    <Route path="login" component={ SessionForm } />
    <Route path="users/new" component={ UserForm } />
    <Route path="users/:id" component={ UserShow } />
    <Route path="search" component={ Search } />
    <Route path="rescue" component={ Rescue } />
  </Route>
);

// var cd = function () {
//   if (document.getElementById('root')) {
//     ReactDOM.render(
//       <Router>{routes}</Router>,
//       document.getElementById('root')
//     );
//   }
// };
window.init = function () {
  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root')
    );
  });
};
