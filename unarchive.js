var fs = require('fs');
var decryptAndDecompress = require('./compressEncrypt').decryptAndDecompress;
var combine = require('multipipe');

combine(
        fs.createReadStream(process.argv[3])
        .pipe(decryptAndDecompress(process.argv[2]))
        .pipe(fs.createWriteStream(process.argv[4]))
).on('error', function(err) {
    //Only errors from the last stream
    console.log(err);
});

//node unarchive mypassword /path/to/a/file.txt.gz.enc /newpath/to/a/file.txt  
