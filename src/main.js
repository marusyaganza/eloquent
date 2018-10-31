require("babel-runtime/regenerator");
require("./main.css");
require("./images/plane.jpg");
require("./index.html");

let a = async args => {
	const {a, b} = args
	await console.log('Hello form the future', a, b);
	console.log('Done');
}

a({a: 1, b: 2});

