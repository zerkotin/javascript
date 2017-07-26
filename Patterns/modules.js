//the nodejs style
///IIFE
(function IIFE(){ //Immediately Invoked Function Expressions
	console.log('Hello');
})(); //hello


///modules
function User(){
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
}

//create a `User` module instance
var fred = User();

fred.login('fred', '12Battery34!');

///security
var a = 2;

(function foo(){

	var a = 3;
	console.log( a ); //3

})();

console.log( a ); //2
