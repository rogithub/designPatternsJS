var q = require('q');

function print(text, times) {
    for (var i = 0; i < times; i++) {
        console.log(text);    
    }        
}

var tasks = [
    q.fcall(function () { print ('step a', 3); }),
    q.fcall(function () { print ('step b', 3); }),
    q.fcall(function () { throw new Error('Error at step c'); })
];

//create parallel 
var promise = q.all(tasks);

promise.then(function() {
    console.log('Success!');
}); 

promise.fail(function(err) {
    console.log(err.message);
}); 