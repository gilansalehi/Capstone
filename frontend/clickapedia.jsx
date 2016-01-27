var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Article = require('./components/article.jsx');
var ArticleIndex = require('./components/article_index.jsx');
var ArticleStore = require('./stores/article.js');
var NavBar = require('./components/nav_bar.jsx');

// var App = require('./components/app.jsx');

// var routes = (
//   <Route path="/" component={App}>
//     <Route path="article/:articleId" component={Article}>
//       <Route path="toys/:toyId" component={ToyDetail} />
//     </Route>
//   </Route>
// );

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
        <ArticleIndex />
        <Article />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
