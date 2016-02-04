var React = require('react');
var ApiUtil = require('../../util/api_util.js');

var UploadForm = React.createClass({

  getInitialState: function() {
    return { title: "", imageFile: null, imageUrl: ""};
  },

  changeTitle: function(e) {
    this.setState({ title: e.currentTarget.value });
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

    var formData = new FormData();

    // formData.append("post[title]", this.state.title);
    // formData.append("post[image]", this.state.imageFile);
    //
    // ApiUtil.createPost(formData, this.resetForm);
  },

  resetForm: function() {
    this.setState({title: "", imageFile: null, imageUrl: ""});
  },

  render: function() {
    return (
      <div>
        <h2>New Post</h2>

        <form onSubmit={this.handleSubmit}>

          <label>Title
            <input type="text" onChange={this.changeTitle} value={this.state.title} />
          </label>

          <label>
            <input type="file" onChange={this.changeFile} />
          </label>

          <img className="preview-image" src={this.state.imageUrl}/>
          <button>Submit</button>
        </form>

      </div>
    );
  }
});

module.exports = PostForm;
