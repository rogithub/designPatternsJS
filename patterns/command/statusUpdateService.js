var statusUpdateService = {
    statusUpdates: {},
    
    sendUpdate: function(status) {
        console.log('Status sent: ' + status);
        var id = Math.floor(Math.random() * 1000000);
        statusUpdateService.statusUpdates[id] = status;
        return id;
    },  
    
    destroyUpdate: function(id) {
        console.log('Status removed: ' + id);
        delete statusUpdateService.statusUpdates[id];
    } 
}

exports.statusUpdateService  = statusUpdateService;