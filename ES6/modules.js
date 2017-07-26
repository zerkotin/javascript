//ES6 introduces export and import

//File: Worker.js
class Worker {

}

export default Worker; //now Worker can be imported

//File: index.js
import Workman from './Worker.js'; //importing Worker class - can change its name to whatever because of the default export

let workman = new Workman(); //using the imported Worker class


//File: MultipleModules.js
class Foo {} //a class with some implementation
class Bar{...} //a class with some implementation

export {Foo, Bar}; //exporting multiple classes

//File: index.js
import {Bar} from './MultipleModules.js'; //importing Bar using destruction

Bar.something(); //use Bar
