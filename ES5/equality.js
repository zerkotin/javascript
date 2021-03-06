var a = '42';
var b = 42;

//== will work with coercion
//=== will work without coercion and will compare the raw references
a == b; //true
a === b; //false

///in addition
a > b;
a < b;

a >= b;
a <= b;

a != b; //with coercion
a !== b; //without coercion

//more interesting facts
false == 0; //true
false === 0; //false

'' == false; //true
'' === false; //false

'' == 0; //true
'' === 0; //false

//but funny enough not this
false == undefined; //false
0 == null; //false

//it seems that undefined and null are not coerced 

