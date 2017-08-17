//Config.js
//we have a basic controller object
const controller = {
  path: null,
  getUrl(id) {
    if(id && this.path.indexOf(':id') !== -1) {
      return this.path.replace(':id', id); //replace the placeholder with the id
    }
    else if(id && this.path.indexOf(':id') === -1){ //didnt expect id but received one
      throw new Error('did not expect id');
    }
    else if(!id && this.path.indexOf(':id') !== -1) { //expected id but didn't receive one
      throw new Error('expected id');
    }
    else {
      return this.path;
    }
  }
}

//factory for controllers
function createController(url) {
  return Object.assign(Object.create(controller), {url});
}

//now lets use it
const controllers = {
  users: createController('/users'),
  user: createController('/users/:id') //this one is expecting id
}

export default {controllers};

//index.js
import Config from './Config.js';

fetch(Config.controllers.user.getUrl(1)).then(res => console.log(res)); //get user with id 1
