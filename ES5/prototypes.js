///lets create a class
function Foo() { //a function is a class
  this.x = 1; //anything refered to with 'this' will become the base of the new instances
  this.y = 2;
}

var foo = new Foo(); //creating a new Object which is isntanceof Foo, note the 'new' keyword

Foo.prototype.constructor === Foo; //true
foo.constructor === Foo; //true

foo.x; //1
foo.y; //2
foo.z = 3; //3

var bar = new Foo(); //creating another instance
bar.x;//1
bar.y;//2
bar.z;//undefined

//i added z to foo, but not to bar...
//lets see how i can change all instances dynamicall...
Foo.prototype.z = 5; //5

foo.z; //3
bar.z; //5


///creating an empty lookuptable
var cleanMap = Object.create(null); //creates an Object like {} without linking it to Object.prototype


///extending classes using call
function Bar() {
  Foo.call(this); //calling foo constructor whith Bar as its scope
}

//fixing the prototype chain
Bar.prototype = Object.create(Foo.prototype); //creating a new chained prototype
Bar.prototype.constructor = Bar; //reassigning the correct constructor

///extending objects using Object.create
var obj = {
  a: 1,
  b:2,
  c:3
}

var obj1 = Object.create(obj); //chaining prototypes
