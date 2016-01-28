// this file will replace the current logic above yield in the application
// layout page.

var React = require('react');
var ReactRouter = require('react-router');
//
// var ArticleStore = require('../stores/article.js');
// var ApiUtil = require('../util/api_util.js');
//
// var Article = require('./article.jsx');
// var ArticleFragment = require('./article_fragment.jsx');
//
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
      <nav className="nav-bar">
        <div className="nav-header group">
          <a className="nav-logo" href="#/">Clickapedia</a>
          <ul className="nav-list">
            <li key="1">Current User</li>
            <li key="2">Nav Icon 2</li>
            <li key="3">Nav Icon 3</li>
            <li key="4">Nav Icon 4</li>
            <li key="5">Nav Icon 5</li>
          </ul>
        </div>
        <div className="sidebar">Break out into its own component</div>
      </nav>
    );
  }
});

// TODO: INCLUDE THIS CODE:
// <div class="nav group">
//   <% if current_user %>
//     <ul>
//       <li><%= current_user.username %></li>
//       <li><%= link_to "Logout", session_url, method: :delete %></li>
//     </ul>
//   <% else %>
//     <ul>
//       <li><%= link_to "Log in", new_session_url %></li>
//       <li><%= link_to "Join Clickapedia", new_user_url %></li>
//     </ul>
//   <% end %>
// </div>

module.exports = NavBar;
