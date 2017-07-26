//the nodejs style
///IIFE
(function IIFE(){ //Immediately Invoked Function Expressions
	console.log('Hello');
})(); //hello


///modules in node
var api = (function User(){ //can also be used as an export for a node module and then required
	var username, password;

	function doLogin(user,pw) {
		username = user;
		password = pw;

		//do the rest of the login work
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
})(); //publicAPI is stored in api

api.login('fred', '12Battery34!'); //use the api

///security
var a = 2;

(function foo(){

	var a = 3;
	console.log( a ); //3

})();

console.log( a ); //2
