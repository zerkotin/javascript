///implementing promise all
function someAsyncProcess() {
  var results = []; //initializing results array
  var listener = null; //initializing a listener

  var promise = {
      then: function(callback){
          listener = callback;
          if(results.length == 10) { //if we already finished
              listener(results); //we can call the listener
          }
      }
  };

  for(var i = 0; i <10; i++) {
      fetch('my.json').then(function(response){
        results.push(response.data); //collecting data

        if(results.length == 10) { //not i == 9 !!!! fetch is async
            listener && listener(results); //call listener when were done
        }
      });
  }

  return promise;
}
