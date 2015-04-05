var fs = require('fs');
var compressAndEncryptStream = require('./compressEncrypt').compressAndEncrypt;
var combine = require('multipipe');

combine(
        fs.createReadStream(process.argv[3])
        .pipe(compressAndEncryptStream(process.argv[2]))
        .pipe(fs.createWriteStream(process.argv[3] + ".gz.enc"))
).on('error', function(err) {
    //Only errors from the last stream
    console.log(err);
});

//node archive mypassword /path/to/a/file.txt
