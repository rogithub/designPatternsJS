function createSendStatusCmd(service, status) {
    var postId = null;
    
    var command = function() {
        postId = service.sendUpdate(status);
    };
    
    command.undo = function() {
        if(postId) {
            service.destroyUpdate(postId);
            postId = null;
        }
    };
    
    command.serialize = function() {
        return { type: 'status', action: 'post', status: status };
    }
    
    return command;
}

exports.createSendStatusCmd = createSendStatusCmd;