//we are using bundlers so there is no need to create a singleton in the form of java

//File: EventsManager.js
//a super simplistic event listener implementation
class EventsManager {
  constructor() {
    this.index = 0;
    this.events = {};
    
    //binding
    this.on = this.on.bind(this);
    this.dispatch = this.dispatch.bind(this);
    this.remove = this.remove.bind(this);
  }
  
  on(event, callback) {
    if(!this.events[event]) this.events[event] = []; //initialize
    this.index++;
    this.events[event].push({index: this.index, callback: callback});
    return this.index++; //return listener id
  }
  
  dispatch(event, data) {
    if(!this.events[event]) return; //validation
    for(let e of this.events[event]) {
      e.callback(data); //call all listeners
    }
  }
  
  remove(event, index) {
    if(!this.events[event]) return; //validation
    this.events[event] = this.events[event].filter(e => e.index !== index);
  }
  
}

let eventManager = new EventManager();
export default eventManager; //exporting a singleton
