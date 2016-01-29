var React = require('react');
var History = require('react-router').History;
// var SessionsApiUtil = require('./../../util/sessions_api_util');

var SessionForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();

    var credentials = $(e.currentTarget).serializeJSON();
    SessionsApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  render: function() {

    return (
      <div class="auth-page group">
        <h1>Log in</h1>

        <form onSubmit={ this.submit } >
          <input type="hidden"
                 name="authenticity_token"
                 value="<%= form_authenticity_token %>">

          <label for="username">Username</label><br>
          <input id="username"
                 type="text"
                 name="user[username]"
                 placeholder="Enter your username"
                 value="">
          <br>

          <label for="password">Password</label><br>
          <input id="password"
                 type="password"
                 name="user[password]"
                 placeholder="Enter your password"
                 value="">
          <br>

          <input class="submit" type="submit" value="Log In">
        </form>

        <div class="join-block">
          Don't have an account?
          <a class="join-button" href="<%= new_user_url %>">Join Clickapedia</a>
        </div>

        <form onSubmit ={ this.submit } >
          <input type="hidden"
                 name="authenticity_token"
                 value="<%= form_authenticity_token %>">
          <input type="hidden" name="user[username]" value="guest">
          <input type="hidden" name="user[password]" value="password">
          <input class="demo-user submit" type="submit" value="Log In As Guest">
        </form>
      </div>
    );
  },

});

module.exports = SessionForm;
