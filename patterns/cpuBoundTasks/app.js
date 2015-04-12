var http = require('http');
//var SubsetSum = require('./subsetSum');
var SubsetSum = require('./subsetSumFork');

http.createServer(function(req, res) {
    var url = require('url').parse(req.url, true);
    if(url.pathname === '/subsetSum') {
        var data = JSON.parse(url.query.data); res.writeHead(200);
        
        var subsetSum = new SubsetSum(url.query.sum, data); 
        
        subsetSum.on('match', function(match) {
            res.write('Match: ' + JSON.stringify(match) + '\n');
        });
        
        subsetSum.on('end', function() {
            res.end('finilized subsed');
        });
        
        subsetSum.start();
    } else {
        res.writeHead(200);
        res.end('I\m alive!\n');
    }
}).listen(8000, function() { console.log('Started') });

/*
with a set of 17 random numbers, which will result in the generation of 131,071 combinations, a nice amount to keep our server busy for a while:
curl -G http://localhost:8000/subsetSum --data-urlencode "data=[116,119,101,101,-116,109,101,-105,-102,117,-115,-97,119,-116,-104,-105,115]"
--data-urlencode "sum=0"
*/