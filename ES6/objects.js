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

//TODO Object.assign
//TODO generators
