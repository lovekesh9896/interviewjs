let fs = require("fs");

let readStream = fs.createReadStream(__dirname + "/read.txt", {
	highWaterMark: 128 * 128,
});
// highWaterMark specifies the size of data chunk to read
let writeStream = fs.createWriteStream(__dirname + "/write1.txt");

readStream.pipe(writeStream);
