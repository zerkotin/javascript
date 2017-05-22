//lets create an object and an array
var o = {a: 'hello', b: 'how', c: 'are', d: 'you'};
var arr = ['hello', 'how', 'are', 'you'];

//object destruction
var {a, b, c, d} = o;
a; //"hello"
b; //"how"
c; //"are"
d; //"you"

//mapping
var {a:x, b:y} = o;
x; //"hello"
y; //"how"

//array destruction
var [a, b, c, d] = arr;
a; //"hello"
b; //"how"
c; //"are"
d; //"you"

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
