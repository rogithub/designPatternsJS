var async = require('async');

function print(text, times)  {
    for(var i = 0; i < times; i++) {        
        console.log(text);           
    }
}

var tasks = [
    'step 1',
    'step 2',
    'step 3'
];

/*this task runs in parallel*/
async.each(
    tasks, 
    function(step, callback) {
        print(step, 5);
        callback();
    },
    function(err) {
        if (err) {
            return console.log('Error!');
        }
        return console.log('Success!');
    }
);