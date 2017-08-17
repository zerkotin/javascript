//Config.js
//we have a basic controller object
const controller = {
  getUrl(id) {
    if(id && this.path.includes(':id')) {
      return this.path.replace(':id', id); //replace the placeholder with the id
    }
    else if(id && !this.path.includes(':id')){ //didnt expect id but received one
      throw new Error('did not expect id');
    }
    else if(!id && this.path.includes(':id')) { //expected id but didn't receive one
      throw new Error('expected id');
    }
    else {
      return this.path;
    }
  }
}

//factory for controllers
function createController(path) {
  return Object.assign(Object.create(controller), {path});
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
