var http = require('http');
var pid = process.pid;

http.createServer(function(req, res) {
    for(var i = 1e7; i > 0; i--) {
    
    }

    console.log('Handling request from the pid:' + pid);
    res.end('Hello from the pid: ' + pid + '\n');

}).listen(8080, function() {
    console.log('Started ' + pid);
});

// Uncomment to see auto restarting even when errors
//setTimeout(function() {
//    throw new Error('Ooops');
//}, Math.ceil(Math.random() * 3) * 1000);
