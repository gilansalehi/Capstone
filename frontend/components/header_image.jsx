var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;

var HeaderImage = React.createClass({
  getInitialState: function () {
    return { url: "http://www.angelafloydschools.com/wp-content/uploads/placeholder-car1.png" };
  },

  componentWillReceiveProps: function (newProps) {
    this.forceUpdate();
  },

  render: function () {
    return <img src={this.props.image} className="header-image" />;
  }
});

module.exports = HeaderImage;
