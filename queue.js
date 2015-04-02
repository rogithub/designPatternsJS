var async = require('async');

function print(text) {
    console.log(text);
}

var tasks = [
    'step 1',
    'step 2',
    'step 3'
];

//initial setup
var q = async.queue(function(step, callback) {
    if (step === "step 3")
        return callback(new Error("deliverated error!"));
    
    print(step);
    return callback();    
}, 2); // <--- CONCURRENCY LIMIT!!! Awesome!

//completed
q.drain = function() {        
    return console.log('All tasks have been processed!');
};

//adding tasks
for(var i = 0; i < tasks.length; i++) {        
    q.push(tasks[i], function (err) {
        if (err) {
            return console.log('Task Error!');
        }
        return console.log('Task Success!');
    });
}

