var async = require('async');

function print(text)  {
    console.log(text);    
}

var tasks = [
    'step 1',
    'step 2',
    'step 3'
];

async.eachSeries(
    tasks, 
    function(step, callback) {
        if (step === 'step 3')
            return callback(new Error());
                
        print(step);
        callback();
    },
    function(err) {
        if (err) {
            return console.log('Error!');
        }
        return console.log('Success!');
    }
);