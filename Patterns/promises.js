//the promise pattern
//a quick example of a very shallow promise implemantation
var api = {
  get: function(url) {
    var response = {}; //some response object
    return {
      then: function(callback) {
        callback(response);
      }
    };
  }
};

//example of how to use the api
api.get('projects').then(function(res) {
  //do some stuff with the response
});
