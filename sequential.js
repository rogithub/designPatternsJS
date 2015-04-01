var async = require('async');

function print(text, done)  {
    console.log(text);
    
    done();
}

var tasks = [
    function(done) { print('step 1', done) },
    function(done) { print('step 2', done) },
    function(done) { done(new Error("failed")); }
];

async.series(tasks, function(err) {
    if (err) {
        return console.log('Error!: return callback(err, null); ');
    }
    return console.log('success: callback(null, result);');
});