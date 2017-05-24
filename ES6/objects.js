//consice methods and properties
var z = 5, w = 10;

var o = {
  x: function() {
    console.log('regular method');
  },
  
  y() {
    console.log('consice method');
  },
  
  z: z, //regular property
  w //consice property

}

//computed property names
var prefix = 'something';
var o = {
  [prefix + 's']: function() {
    console.log('look at that');
  },
  [prefix + 'x']() {
    console.log('consice');
  }
}
o.somethings(); //"look at that"
o.somethingx(); //"consice"

//super
var o1 = {
  x: 1,
  foo() {
    console.log(this.x);
  }
}

var o2 = {
  foo() { //super is only allowed in concise functions
    this.x = 2;
    super.foo(); //using super - cannot call super() only super.function!
  }
}
Object.setPrototypeOf( o2, o1 ); //setting the prototype - similarly there is a getPrototypeOf function
o2.foo(); //2

//Object.assign
var o1 = {a: 'a'};
var o2 = {b: 'b'};
var o3 = {b: 'gotcha', c: 'c'};

var o = Object.assign(o1, o2, o3); //target, source, source...
o; //{a: "a", b: "gotcha", c: "c"}
o1; //{a: "a", b: "gotcha", c: "c"}
//if we didn't want to change o1: var o = Object.assign({}, o1, o2, o3);

