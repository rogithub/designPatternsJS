var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

function findPattern(files, regex) {
    'use strict';
    var emitter = new EventEmitter();
    
    files.forEach(function (file) {
        fs.readFile(file, 'utf8', function (err, content) {
            if (err)
                return emitter.emit('error', err);
            
            emitter.emit('fileread', file);
            var match = null;
            if (match = content.match(regex)) {
                match.forEach(function (element) {
                    emitter.emit('found', file, element);
                });
            }
        });
    });
    
    return emitter;
}

findPattern(['observer.js'], /emiter/)
.on('fileread', function (file) {
    console.log(file + ' was read');
})
.on('found', function (file, match) {
    console.log('Matched "' + match + '" in file ' + file);
})
.on('error', function (err) {
    console.log('Error emitted: ' + err.message);
});