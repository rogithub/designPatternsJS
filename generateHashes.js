var fs = require('fs');
var crypto = require('crypto');

var sha1Stream = crypto.createHash('sha1');
sha1Stream.setEncoding('base64');

var md5Stream = crypto.createHash('md5');
md5Stream.setEncoding('base64');


var inputFile = process.argv[2];
var inputStream = fs.createReadStream(inputFile);

console.log('[sha1]');
inputStream
     .pipe(sha1Stream)
     .pipe(process.stdout);

inputStream.on('end', function() {
    console.log("\n\n[md5]");
});


inputStream
     .pipe(md5Stream)
     .pipe(process.stdout);

inputStream.on('end', function() {
    console.log("\n");
});

//spliting stream
//node generateHashes pathToFile 