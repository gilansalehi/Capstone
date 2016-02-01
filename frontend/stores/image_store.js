var Store = require('flux/utils').Store;
var ImageConstants = require("../constants/image_constants");
var AppDispatcher = require("../dispatcher/dispatcher");


var ImageStore = new Store(AppDispatcher);

var _currentHeader = "http://www.angelafloydschools.com/wp-content/uploads/placeholder-car1.png";

var resetHeaderImage = function (image) {
  _currentHeader = image;
};

ImageStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ImageConstants.HEADER_IMAGE_RECEIVED: //Create this files
      _currentHeader = payload.image.url;
      ImageStore.__emitChange();
      break;
  }
};

ImageStore.fetchHeader = function () {
  return _currentHeader;
};

module.exports = ImageStore;
