var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('./../../util/sessions_api_util');

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
      <div className="auth-page group">
        <h1>Log in</h1>

        <form onSubmit={ this.submit } >

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

          <input className="submit" type="submit" value="Log In"></input>
        </form>

        <div className="join-block">
          Don't have an account?
          <a className="join-button" href="#/users/new">Join Clickapedia</a>
        </div>

        <form onSubmit={ this.submit } >
          <input type="hidden" name="user[username]" value="guest"></input>
          <input type="hidden" name="user[password]" value="password"></input>
          <input className="demo-user" type="submit" value="Log In As Guest"></input>
        </form>

        <div>Log in with
          <form onSubmit={ this.logInWithFacebook } className="oauth-facebook">
            <a href="/auth/facebook"><i className="fa fa-facebook-official fa-fw"></i></a>
          </form>
        </div>
      </div>
    );
  },

});

module.exports = SessionForm;
