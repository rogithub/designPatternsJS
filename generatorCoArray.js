var co = require('co');
var q = require('q');

co(function* () {
    var arr = yield [
        q.fcall(function () { console.log('step 1') }),
        q.fcall(function () { console.log('step 2') }),
        q.fcall(function () { throw new Error('Error at step 3'); })
    ];
    
    return arr;
    
}).then(function (value) {
    console.log(value);
}, function (err) {
    console.error(err.message);
});