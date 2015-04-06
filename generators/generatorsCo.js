var co = require('co');
var q = require('q');

co(function* () {
    yield q.fcall(function () { console.log('step 1') });
    yield q.fcall(function () { console.log('step 2') });
    yield q.fcall(function () { throw new Error('Error at step 3'); });    
        
    return 'step 4';
    
}).then(function (value) {
    console.log(value);
}, function (err) {
    console.error(err.message);
});