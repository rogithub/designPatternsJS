var q = require('q');

function print(text) {
    console.log(text);    
}

var tasks = [
    function (val) { print ('step ' + val); return val + 1; },
    function (val) { print ('step ' + val); return val + 1; },
    function (val) { print ('step ' + val); return val + 1; }
];

var sequential = function (tasks, initialVal) {
    
    var promise = tasks.reduce(function (prev, task) {
        return prev.then(task);
    }, q(initialVal));
    
    return promise;
}


sequential(tasks, 1);