var React = require('react');
var ReactRouter = require('react-router');
var ArticleStore = require('../stores/article.js');
var ApiUtil = require('../util/api_util.js');
var HeaderImage = require('./header_image.jsx');
var ImageStore = require('../stores/image_store');
var ArticleEditor = require('./article_editor');
var UploadButton = require('./upload_form');

var History = require('react-router').History;

// this is the display logic for a single article.

var Article = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return ({
      title: "",
      body: "Article Body...",
    });
  },

  componentDidMount: function () {
    this.articleListener = ArticleStore.addListener(this.__onArticleChange);
    this.headerListener = ImageStore.addListener(this.__onHeaderChange);
    ApiUtil.fetchArticle(this.props.params.article_id);
  },

  __onArticleChange: function () {
    var article = ArticleStore.fetchArticle();
    ApiUtil.fetchHeaderImage(article.title);
    // var image = ImageStore.fetchHeader();
    this.setState({ title: article.title, body: article.body });
  },

  __onHeaderChange: function () {
    this.forceUpdate();
  },

  componentWillUnmount: function () {
    this.articleListener.remove();
  },

  saveToDatabase: function () {
    var body = this.state.body;
    var article_id = this.state.article.id;
    ApiUtil.saveEditedArticle(article_id, body);
  },

  render: function () {
    return (
      <div className="article">
        <HeaderImage title={this.state.title} image={ImageStore.fetchHeader()}/>
        <div className="title-block group">
          <h1 className="title">{this.state.title}</h1><ArticleEditor /><UploadButton />
        </div>
        <article className="body"
                 contentEditable="false"
                 dangerouslySetInnerHTML={{__html: this.state.body}}>
        </article>
      </div>
    );
  }
});

module.exports = Article;
