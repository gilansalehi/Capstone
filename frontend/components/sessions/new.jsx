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

          <input class="submit" type="submit" value="Log In"></input>
        </form>

        <div class="join-block">
          Don't have an account?
          <a class="join-button" href="<%= new_user_url %>">Join Clickapedia</a>
        </div>

        <form onSubmit ={ this.submit } >
          <input type="hidden"
                 name="authenticity_token"
                 value="<%= form_authenticity_token %>"></input>
          <input type="hidden" name="user[username]" value="guest"></input>
          <input type="hidden" name="user[password]" value="password"></input>
          <input class="demo-user submit" type="submit" value="Log In As Guest"></input>
        </form>
      </div>
    );
  },

});

module.exports = SessionForm;
