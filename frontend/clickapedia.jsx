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

// var App = require('./components/app.jsx');
// document.addEventListener("DOMContentLoaded", function () {
//   ReactDOM.render(
//     <Router>{routes}</Router>,
//     document.getElementById('root')
//   );
// });

var App = React.createClass({
  render: function () {
    return(
      <div>
        <NavBar />
        <content className="content group">
          <div>
            {this.props.children}
          </div>
        </content>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ArticleIndex} />
    <Route path="article/:article_id" component={Article}>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('root')) {
    ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
  }
});
