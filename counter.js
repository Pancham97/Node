var http = require('http');
var fs = require('fs');
var counter = 0;
function writeNumbers(res) {


    for(var i = 0; i < 50; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

http.createServer(function(req, res) {
    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + ".txt";

    res.writeHead(200, {'content-type': 'text/plain'});

    writeNumbers(res);

    setTimeout(function() {
        console.log("opening " + app);
        fs.readFile(app, 'utf8', function(err, data) {
            if(err) {
                res.write("Error opening file!");
            } else {
                res.write(data);
            }
            res.end();
        });
    }, 100);
}).listen(8124);

console.log("Server is running on 8124");
