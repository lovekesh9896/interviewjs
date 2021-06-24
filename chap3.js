//revealing module pattern
//Turn this object literal into a module that only exposes the render method

// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: (function () {

//     }),
//     remove: () => {

//     }
// };

let myModule = (function () {
	let _data = [];
	let _render = function () {};
	let _add = function () {};
	let _remove = function () {};

	return { render: _render };
})();

myModule.render();
