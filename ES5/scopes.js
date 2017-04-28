function globalizeMe() { //lets define a function called globalizeMe
  a = 1; //without var it will be defined directly on the window object
  var b = 2;  //with var it will be defined at the current scope/closure
}

globalizeMe(); //invoking the function

console.log(a); //1
console.log(b); //undefined
