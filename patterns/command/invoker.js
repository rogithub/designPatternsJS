function Invoker() {
    this.history = [];
}

Invoker.prototype.run = function(cmd) {
    this.history.push(cmd);
    cmd();
    console.log('Command executed', cmd.serialize());
};


Invoker.prototype.undo = function() {
    var cmd = this.history.pop();
    cmd.undo();
    console.log('Command undone', cmd.serialize());
}


Invoker.prototype.delay = function(cmd, delay) {
    var self = this;
    
    setTimeout(function() {
        self.run(cmd);
    }, delay)
}

Invoker.prototype.runRemotely = function(cmd) {
    var self = this;
    
    request.post(
        'http://localhost:3000/cmd',
        { json: cmd.serialize()} , 
        function(err) {
            console.log('Command executed remotely', cmd.serialize());
        });
}

exports.Invoker = Invoker;