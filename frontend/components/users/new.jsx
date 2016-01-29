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
    UsersApiUtil.createUser(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function() {

    return (
      <div className="auth-page group">

        <h1>Create account</h1>

        <form onSubmit={ this.submit }>

          <label for="username">Username</label><br></br>
          <input id="username"
                 type="text"
                 name="user[username]"
                 placeholder="Enter your username"></input>
          <br></br>

          <label for="password">Password</label><br></br>
          <input id="password"
                 type="password"
                 name="user[password]"
                 placeholder="Enter your password"></input>
          <br></br>

          <label for="password2">Confirm password</label><br></br>
          <input id="password2"
                 type="password"
                 name="user[password_confirm]"
                 placeholder="Enter your password again"></input>
          <br></br>

          <label for="email">Email address (optional)</label><br></br>
          <input id="email"
                 type="text"
                 name="user[email]"
                 placeholder="Enter your email address"></input>
          <br></br>

          <input className="submit" type="submit" value="Create account"></input>
        </form>

        <div className="stats">
          Clickapedia is made by people like you.

        </div>

      </div>
    );
  },

});

module.exports = UserForm;
