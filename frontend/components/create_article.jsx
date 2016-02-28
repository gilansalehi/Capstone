var React = require('react');
var ApiUtil = require('../util/api_util.js');
var ArticleStore = require('../stores/article');
var CurrentUserStore = require('../stores/current_user_store');

var CreateButton = React.createClass({

  renderModal: function () {
    $("#modal").addClass("is-active");
  },

  handleClick: function () {
    if (CurrentUserStore.currentUser()) {
      this.renderModal();
    } else {
      alert("Please log in.");
    }
  },

  render: function () {

    return (
      <div className="toggle-create">
        <div className="article-create icon">
          <i className="fa fa-plus" onClick={this.handleClick}></i>
        </div>
        <CreationForm />
      </div>
    );
  }
});

var CreationForm = React.createClass({

  getInitialState: function() {
    return { title: "", wikiFetcher: "" };
  },

  changeTitle: function(e) {
    this.setState({ title: e.currentTarget.value, wikiFetcher: "" });
  },

  changeWiki: function(e) {
    this.setState({ title: "", wikiFetcher: e.currentTarget.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var cu = CurrentUserStore.currentUser();

    if (this.state.title) {
      ApiUtil.createNewArticle({
        title: this.state.title,
        body: "Click the stylus above to add text to this article.  You can do it!", 
        author_id: cu.id });
    } else {
      ApiUtil.fetchFromWikipedia(this.state.wikiFetcher);
    }

    this.closeModal();
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },

  closeModal: function () {
    $("#modal").removeClass("is-active");
  },

  render: function() {
    return (
      <div id="modal" className="modal">
        <form onSubmit={this.handleSubmit}>
          <label className="modal-header">Create Article</label><br></br>

          <img className="preview-image" src={this.state.imageUrl}/><br></br>

          <label for="title-input">New article</label><br></br>
          <input id="title-input"
                   type="text"
                   onChange={this.changeTitle}
                   value={this.state.title}
                   placeholder="Enter the title for a new article"/>
          <br></br>

          <label for="wiki-fetcher-input">Import from Wikipedia</label><br></br>
          <input id="wiki-fetcher-input"
                 type="text"
                 onChange={this.changeWiki}
                 value={this.state.wikiFetcher}
                 placeholder="Enter the title of a Wikipedia article"/>
          <br></br>

          <input className="submit-button" type="submit" value="Submit" />
          <input className="cancel-button" value="Cancel" onClick={this.closeModal} />
        </form>

      </div>
    );
  }
});

module.exports = CreateButton;
