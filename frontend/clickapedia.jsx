var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

// var App = require('./components/app.jsx');

// var routes = (
//   <Route path="/" component={App}>
//     <Route path="pokemon/:pokemonId" component={PokemonDetail}>
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

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>Hello World</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
