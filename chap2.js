let num = 0;
async function increment() {
	num += await 2;
	console.log(num);
}
increment();
num += 1;
console.log(num);
/****
 * What is the resulting output?
 *  2, 3
 *  1, 3
 *  1, 2
 *  2, 1
 */

// my asnwere 1 3 actual answere 1 2
// because in line 3 ->  num += await 2 the value of (num = num + await 2 ) of right side num is already 2
// we are waiting for await(2) not num.
