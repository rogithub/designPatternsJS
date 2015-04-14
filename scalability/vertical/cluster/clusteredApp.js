var cluster = require('cluster');
var os = require('os');

if(cluster.isMaster) {
    
    //send messages to child process
    Object.keys(cluster.workers).forEach(function(id) {
        cluster.workers[id].send('Hello from the master');
    });
    
    var cpus = os.cpus().length;
    //start as many children as the number of CPUs
    for (var i = 0; i < cpus; i++) {
        cluster.fork();
    }
 
    //if one crashes create another fork
    //availability
    cluster.on('exit', function(worker, code) {
        if(code != 0 && !worker.suicide) {
            console.log('Worker crashed. Starting a new worker');
            cluster.fork();
        }
    });
    
    //zero-downtime restart
    process.on('SIGUSR2', function() {         
        console.log('Restarting workers');
        var workers = Object.keys(cluster.workers);
        
        function restartWorker(i) {         
            if(i >= workers.length) return;
            
            var worker = cluster.workers[workers[i]];
            console.log('Stopping worker: ' + worker.process.pid);
            worker.disconnect(); 
            
            worker.on('exit', function() {
                if(!worker.suicide) return;
                
                var newWorker = cluster.fork();      
                newWorker.on('listening', function() {
                    restartWorker(i + 1);
                });
            }); 
        }
        restartWorker(0);
    });
    
    
} else {
    require('./app');
}

//in other terminal test with 
//ab -c200 -t10 http://localhost:8080/