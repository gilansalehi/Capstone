var React = require('react');
var History = require('react-router').History;
var UserStore = require('../../stores/users_store');
var UsersApiUtil = require('../../util/users_api_util');
// var SessionsApiUtil = require('./../../util/sessions_api_util');

var UserForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();

    var credentials = $(e.currentTarget).serializeJSON();
    UsersApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function() {

    return (
      <div class="auth-page group">

        <h1>Create account</h1>

        <form onSubmit={ this.submit }>
          <input type="hidden"
                 name="authenticity_token"
                 value="<%= form_authenticity_token %>"></input>

          <label for="username">Username</label><br></br>
          <input id="username"
                 type="text"
                 name="user[username]"
                 placeholder="Enter your username"
                 value=""></input>
          <br></br>

          <label for="password">Password</label><br></br>
          <input id="password"
                 type="password"
                 name="user[password]"
                 placeholder="Enter your password"
                 value=""></input>
          <br></br>

          <label for="password2">Confirm password</label><br></br>
          <input id="password2"
                 type="password"
                 name="user[password_confirm]"
                 placeholder="Enter your password again"
                 value=""></input>
          <br></br>

          <label for="email">Email address (optional)</label><br></br>
          <input id="email"
                 type="text"
                 name="user[email]"
                 placeholder="Enter your email address"
                 value=""></input>
          <br></br>

          <input class="submit" type="submit" value="Create account"></input>
        </form>

        <div class="stats">
          Clickapedia is made by people like you.

        </div>

      </div>
    );
  },

});

module.exports = UserForm;
