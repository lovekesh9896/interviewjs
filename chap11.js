//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers
function a(i) {
	console.log(i);
}

let result = ["1", "7", "11"].map(parseInt); //returns [1, NaN, 3]
// let result = ["1", "7", "11"].map((i) => parseInt(i));

console.log(result);
