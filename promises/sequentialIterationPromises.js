var q = require('q');

function print(text) {
    console.log(text);    
}

var tasks = [
    function (val) { print ('step ' + val); return val + 1; },
    function (val) { print ('step ' + val); return val + 1; },
    function (val) { throw new Error('Error at step ' + val); }
];

var sequential = function (tasks, initialVal) {
    
    var promise = tasks.reduce(function (prev, task) {
        return prev.then(task);
    }, q(initialVal));
    
    return promise;
}


var promise = sequential(tasks, 1);

promise.then(function() {
    console.log('Success!');
}); 

promise.fail(function(err) {
    console.log(err.message);
}); 