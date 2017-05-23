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
Object.setPrototypeOf( o2, o1 ); //setting the prototype
o2.foo(); //2

//Object.assign
var options1 = {
  config1: 'someconfig',
  config2: 'someotherconfig',
  config3: 'overriden'
}

var options2 = {
  config3: 'anotherconfig'
}

var options3 = Object.assign({}, options1, options2); //target, source, source...
options3; //config1: someconfig, config2: someotherconfig, config3: anotherconfig

