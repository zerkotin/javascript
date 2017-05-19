//ES6 introduces block scopes
//consider this example
var a = 2;
{
  var a = 3;
}
console.log(a); //3

//lets do the same using 'let'
let b = 2;
{
  let b = 3;
}
console.log(b); //2
