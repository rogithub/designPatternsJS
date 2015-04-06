function demultiplexChannel(source, destinations) {
    var currentChannel = null;
    var currentLength = null;
    ￼source
    .on('readable', function() {
        var chunk;
        if(currentChannel === null) {
            chunk = this.read(1);
            //[1] //[2]
            currentChannel = chunk && chunk.readUInt8(0);
        }
        if(currentLength === null) {          //[3]
            chunk = this.read(4);
            currentLength = chunk && chunk.readUInt32BE(0);
            if(currentLength === null) {
                return; 
            }
        }
        chunk = this.read(currentLength);
        if(chunk === null) {
            return; 
        }
        console.log('Received packet from: ' + currentChannel);
        destinations[currentChannel].write(chunk);
        currentChannel = null;
        currentLength = null;
    }).on('end', function() {            //[6]
        destinations.forEach(function(destination) {
            destination.end();
        });
        console.log('Source channel closed');
    });
};

net.createServer(function(socket) {
    var stdoutStream = fs.createWriteStream('stdout.log');
    var stderrStream = fs.createWriteStream('stderr.log');
    demultiplexChannel(socket, [stdoutStream, stderrStream]);
}).listen(3000, function() {
    console.log('Server started');
});