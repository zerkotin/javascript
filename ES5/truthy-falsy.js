///falsy list
var a = ''; //empty string
var b = 0;
var c = -0;
var d = NaN; //invalid number
var e = null;
var f = undefined;
var g = false;

console.log(a || b || c || d || e || f || g); //false, because they are all false


///whatever is not falsy would be truthy, here's some examples..
a = 'hello'; //string
b = 42; //number
c = true; //boolean true
d = [ ]; //empty array
e = [ 1, '2', 3 ]; //arrays
f = { }; //empty object
g = { a: 42 }; //object
function h() { }//function
var i = h; //reference to a function

console.log(a && b && c && d && e && f && g && h && i); //true, because they are all true
