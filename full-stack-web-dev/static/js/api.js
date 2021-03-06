

window.AlbumAPI = {

  // Get all albums from the server
  get_albums: function() {
    var deferred = new $.Deferred();
    $.ajax({
      url: '/albums',
    }).done(function(res) {
      deferred.resolve(res);
    });
    // Not sure how to use promises? Checkout this link about jQuery's deferred object
    // https://api.jquery.com/deferred.done/
    return deferred.promise();
  }
};
