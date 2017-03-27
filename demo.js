var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('hello.js', 'utf8', function(err, data) {
        res.writeHead(200, {'content-type' : 'text/plain'});
        if(err) {
            res.write("There is an error!");
        } else {
            res.write(data);
        }
        res.end();
    });
}).listen(8124, function() { console.log('Bound to port 8124.'); });

console.log("Server is running on port 8124");