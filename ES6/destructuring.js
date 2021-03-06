//lets create an object and an array
var o = {a: 'hello', b: 'how', c: 'are', d: 'you'};
var arr = ['hello', 'how', 'are', 'you'];

//object destructuring
var {b, c, d, e} = o;
a; //undefined
b; //"how"
c; //"are"
d; //"you"
e; //undefined

//mapping
var {a:x, b:y} = o; 
x; //"hello"
y; //"how"

var {a: a, a:b} = o;
a; //"hello"
b; //"hello"


//array destructuring
var [, b, c, d, e] = arr;
a; //undefined
b; //"how"
c; //"are"
d; //"you"
e; //undefined

//declaration options
var a,b,c,d;
{a, b, c, d} = o; //without declaration
//or
var {a, b, c, d} = o; //with declaration

//same for arrays
var a,b,c,d;
[a, b, c, d] = arr; //without declaration
//or
var [a, b, c, d] = arr; //with declaration


//swapping numbers without a temp
var x = 10, y = 20;
[ y, x ] = [ x, y ];
console.log( x, y ); //20 10


//using computed properties in destruction
var source = {x: 5};
var ref = 'x';
var target = {};

({[ref]: target[ref]} = source); //you have to bracket it
target.x; //5

//REMINDER Hierarchical destructuring
