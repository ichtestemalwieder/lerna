'use strict';

var foo = require('foo')

module.exports = bar;

function bar() {
	console.log("super");
	 foo()

}

bar(); 