var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var HeaderImage = require('./header_image.jsx');
var ImageStore = require('../stores/image_store');
var Article = require('./article');
var CurrentUserStore = require('../stores/current_user_store');

var History = require('react-router').History;

// http://www.html5rocks.com/en/tutorials/dnd/basics/

var ArticleEditor = React.createClass({
  mixins: [History],

  toggleView: function (e) {
    e.preventDefault();
    if (this.state.mode === "visible") {
      this.setState({ mode: "invisible" })
      $(".styler-buttons").addClass("hidden");
    } else {
      this.setState({ mode: "visible" })
      $(".styler-buttons").removeClass("hidden");
    }
  },

  addLink: function (e) {
    e.preventDefault();

    function link() {
        var url = prompt("Enter the URL");
        document.execCommand("createLink", false, url);
    }
  },

  embolden: function (e) {
    e.preventDefaut();

    function bold() { document.execCommand("bold", false, null); }
  },

  italicize: function (e) {
    e.preventDefaut();
    function italicize () { document.execCommand("italicize", false, null) }
  }

  render: function () {
    return (
      <div className="styler">
        <span className="draggable dragger"><h3> Styler </h3></span>
        <a onClick={ this.toggleView } ><i className="fa fa-chevron-down"></i></a>
        <ul className="styler-buttons">
          <li><a onClick={ this.addLink }><i className="fa fa-link"></i> Add Link </a></li>
          <li><a onClick={ this.makeBold}><i class="fa fa-bold"></i><strong> Bold </strong></a></li>
          <li><a onClick={ this.italicize}><strong> i </strong> Italicize </a></li>
        </ul>
      </div>
    );
  }
});

module.exports = ArticleStyler;
