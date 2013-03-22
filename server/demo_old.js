/**
 * ScreenKit demo
 *
 * @author Richard Leggett - http://www.valisinteractive.com
 */
 
 // remember to run 'npm install socket.io' and 'mime'
var PORT = 1337;

// TODO: var app = require('./lib/screenkit.js').createServer(config)

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(server)
  , fs = require('fs')
  , url = require('url')
  , mime = require('mime')
var screenSockets = [];

app.listen(PORT);

io.sockets.on('connection', function (socket) {
	socket.emit('servermessage', {method: 'connected', data:'true'});	

  // call from a screen
  socket.on('screenmessage', function (obj) {
    console.log('from screen: ' + obj.method + " - " + obj.data);

    if(obj.method == "register") {
    	// register a screen on the network
    	var screenId = obj.data;
    	screenSockets[screenId] = socket;
    	console.log('registered screen: ' + screenId);
    	socket.emit('servermessage', {method: 'registered', data:'true'});
	}
  });

  // call from a client (mobile)
  socket.on('clientmessage', function (obj) {
    console.log('from client: ' + obj.method + " - " + obj.data);

    if(obj.method == 'register') {
		var screenId = obj.data;
	    socket.screenId = screenId; // store screenId in socket
	    console.log('registered client for screen: ' + socket.screenId);
    	socket.emit('servermessage', {method:'registered', data:'true'});	

    } else {
    	// send message to a screen
    	var screenSocket = null;
		if(socket.screenId && screenSockets[socket.screenId]) {
    		screenSocket = screenSockets[socket.screenId];

    	} else {
    		console.log('client not connected to screen ' + (socket.screenId ? socket.screenId : "UNKNOWN"));
    		socket.emit('servermessage', {method:'notconnected'});
    		return;
    	}

		switch(obj.method) {
	    	case 'buttonPressed' : 
	    	case 'sliderChanged' : 
	    		console.log(obj.method + " data: " + obj.data);
	    		screenSocket.emit('servermessage', {method:obj.method, data:obj.data});	
	    		break;
	    }
    }
 
  });
});
console.log('Server running at http://slimbox.local:'+PORT+'/');


// web server
function handler (req, res) {
	var path = url.parse(req.url).pathname;

	if (path[path.length - 1] == '/') {
            path += 'index.html';
    }

	fs.readFile(__dirname + '/' + req.url,
    function (err, data) {
	    if (err) {
	      res.writeHead(500);

	      return res.end('Error loading ' + req.url);
	    }
	    console.log('serving: ' + req.url);

	    res.writeHead(200, {
	                'Content-Type': mime.lookup(req.url),
	                'Content-Length': data.length
	            });
	    res.end(data);
	});
}
 