var ReplaceStream = require('./transformStream');
var rs = new ReplaceStream('World', 'Node.js');

rs.on('data', function(chunk) {
    console.log(chunk);
});
rs.write('Hello W');
rs.write('orld!');
rs.end();