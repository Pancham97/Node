var http = require('http');
var options = {
    host: 'localhost',
    port: 8124,
    path = '/?file=secondary',
    method = 'GET'
};

var processPublicTimeline = function(response) {
    console.log("Finished processing!");
};

for(var i = 0; i < 2000; i++) {
    http.request(options, processPublicTimeline).end();
}
