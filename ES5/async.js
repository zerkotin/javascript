//aync problem
var requests = ['1.json', '2.json', '3.json', '4.json', '5.json'];
var results = [];
for(var i = 0; i < requests.length; i++) {
    fetch(requests[i]).then(function(response){ //fetch creates an ajax call and returns a promise
      results.push(response.data); //collecting data 
    });
}
return results; //oops! results is still empty!

//lets try again, we rewrite the fetch part...
fetch(requests[i]).then(function(response){
  results.push(response.data);
  
  //the addition
  if(results.length === requests.length) {
    return results; //oops!, we are returning the callback, it doesnt return a value anywhere!
  }
});

//lets revise the whole thing
var requests = ['1.json', '2.json', '3.json', '4.json', '5.json'];

function getData(requests, callback) { //a wrapper function
  var results = [];
  for(var i = 0; i < requests.length; i++) {
      fetch(requests[i]).then(function(response){ //fetch creates an ajax call and returns a promise
        results.push(response.data); //collecting data 
        
        if(results.length === requests.length) { //checking if its the last one
          callback(results); //now that should work
        }
      });
  }
}

//how we use it?
getData(requests, function(results) {
  console.log(results); //Array[5]
});

// alternatively we can use promises - we will see that in the promises section
