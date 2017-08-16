//ES6 itroduced us to promises, lets see how we use them
const promise = new Promise((resolve, reject) => {
  //do a lot of things
  //and some more things
  if(everythingIsOk) { //just an example boolean
    resolve(result); //result is an example result object/value
  }
  else {
    reject('i failed for some reason :('); //fail with a message
  }
});

//how do i use this promise
//option 1
promise.then((resolved, failed) => {
  if(failed) {
    console.log('failed with message', failed);
  }
  else {
    console.log('resolved with data', resolved);
  }
});

//options 2
promise.then((res) => console.log('resolved with data', res)).catch((res) => console.log('failed with message', res));


//a useful usecase
const api = {
  get(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  },
  post(url, data) {
    //...
  }
  //...
}

api.get('users.json').then(res => console.log(res)); // prints users.json

//theres also Promise.all
//TODO
