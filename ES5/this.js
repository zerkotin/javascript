function foo() {
	console.log( this.bar );
}

var bar = 'global';

var obj1 = {
	bar: 'obj1',
	foo: foo
};

var obj2 = {
	bar: 'obj2'
};


foo(); //global
obj1.foo(); //obj1
foo.call(obj2);	//obj2
foo.apply(obj1, []); //obj1
new foo(); //undefined


///another example
var obj = {
	id: 'awesome',
	cool: function coolFn() {
		console.log(this.id);
	}
};

var id = 'not awesome';
var foo = obj.cool;

obj.cool(); //awesome
foo(); //not awesome

setTimeout( obj.cool, 100 ); //not awesome


///the this=that solution
var obj = {
	count: 0,
	cool: function coolFn() {
		var self = this;

		if (self.count < 1) {
			setTimeout( function timer(){
				self.count++;
				console.log('woo hoo');
			}, 100 );
		}
	}
};

obj.cool(); //woo hoo


///or use bind
var obj = {
	id: 'awesome',
	cool: function coolFn() {
		console.log( this.id );
	}
};

var id = 'not awesome';

obj.cool(); //awesome

setTimeout( obj.cool.bind(obj), 100 ); //the downside - it creates a new function


///Extra clarification
var obj = {
    foo: function() {
        console.log(this); //Object
        var something = function() {
		console.log(this); //Window
	}
	function somethingElse() {
		console.log(this); //Window
	}
        something(); //reference without call site
	somethingElse(); //function without call site
    }
}

obj.foo(); //Object, Window, Window
//no matter what is the first scope, if you call a function without a call site the call site is Window.
