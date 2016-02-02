var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var History = require('react-router').History;

var HeaderImage = React.createClass({
  getInitialState: function () {
    return { url: "http://www.angelafloydschools.com/wp-content/uploads/placeholder-car1.png" };
  },

  // componentDidMount: function () {
  //   ArticleStore.addListener(this.__onChange);
  // },
  //
  // __onChange: function () {
  //   console.log("header __onChange");
  //   if (this.props.title) {
  //     this.setState({ url: url });
  //   }
  // },

  componentWillReceiveProps: function (newProps) {
    // console.log("header didReceiveProps");
    // if (newProps.title) {
    //   ApiUtil.fetchHeaderImage(newProps.title);
    // }
    this.forceUpdate();
  },

  render: function () {
    console.log(this.props.image);
    return <img src={this.props.image} className="header-image" />;
  }
});

module.exports = HeaderImage;
