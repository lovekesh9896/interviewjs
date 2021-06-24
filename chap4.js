let f = function (a, b) {
	// by me
	// if (arguments.length == 2) {
	// 	console.log("yes");
	// } else {
	// 	console.log("no");
	// }

	// actual
	if (arguments.length === f.length) {
		// yes
	} else {
		// no
	}
};

//determine if the function received the number of params it expected
f(1);
f(1, 2);
f(1, 2, 3);
