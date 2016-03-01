var React = require('react');
var ApiUtil = require('../util/api_util.js');
var ArticleStore = require('../stores/article');

var UploadButton = React.createClass({

  renderModal: function () {
    $("#image-modal").addClass("is-active");
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
      <div className="image-upload-icon-and-modal">
        <div className="article-editor image">
          <i className="fa fa-file-image-o" onClick={this.handleClick}></i>
        </div>
        <UploadForm />
    </div>
    );
  }
});

var UploadForm = React.createClass({

  getInitialState: function() {
    return { title: "", imageFile: null, imageUrl: "", article_id: this.props.article_id };
  },

  changeUrl: function(e) {
    this.setState({ url: e.currentTarget.value });
  },

  changeFile: function(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];

    reader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: reader.result});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file); // will trigger a load end event when it completes, and invoke reader.onloadend
    } else {
      this.setState({imageFile: null, imageUrl: ""});
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var ca = ArticleStore.fetchArticle();
    var formData = new FormData(); // HOW DO I PASS THE ARTICLE ID AS AN ATTR?

    if (this.state.url) {
      formData.append("article[image]", this.state.url);
    } else {
      formData.append("article[image]", this.state.imageFile);
    }

    ApiUtil.saveEditedArticle(ca.id, formData, this.resetForm);
    this.closeModal();
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },

  closeModal: function () {
    $("#image-modal").removeClass("is-active");
  },

  render: function() {
    return (
      <div id="image-modal" className="image-modal modal">
        <form onSubmit={this.handleSubmit}>
          <label className="modal-header">Upload Image</label><br></br>

          <img className="preview-image" src={this.state.imageUrl}/><br></br>

          <label for="img-url-input">by url</label><br></br>
          <input id="img-url-input"
                   type="text"
                   onChange={this.changeUrl}
                   value={this.state.url}
                   placeholder="Enter the url of your image (optional)"/>
          <br></br>

          <label for="img-file-input">by file</label><br></br>
          <input id="img-file-input" type="file" onChange={this.changeFile} />
          <br></br>

          <input className="submit-button" type="submit" value="Submit" />
          <input className="cancel-button" value="Cancel" onClick={this.closeModal} />
        </form>

      </div>
    );
  }
});

module.exports = UploadButton;
