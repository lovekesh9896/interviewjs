//var hoisting vs let hoisting
//WHAT will be the output from this code and why?

function f() {
	console.log("var", area); // undefined
	console.log("let", name); // refrence error
	let name = "Bert";
	var area = "Geology";
}
f();
