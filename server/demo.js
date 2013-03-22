// create a new ScreenKit app
var app = require('screenkit');

// listen on port 1337
app.listen(1337); 

// screen connected to our ScreenKit app
app.screens.on('connect', function(screen, data) {
  console.log('Screen connected with ID: ' + screen.id);
  
  if(screen.id=='demo1') {
  }
});

// screen disconnected from our ScreenKit app
app.screens.on('disconnect', function(screen, data) {
  console.log('Screen disconnected with ID: ' + screen.id);
});

// TODO: I don't thinl this would be exposed here, it'll be behind the scenes
// message received from a screen, targetClient may be null
app.screens.on('message', function(screen, targetClient, data) {
	
});

// client device connected to a screen
app.clients.on('connect', function(client, screen) {
  console.log('Client device connected: ' + client 
				+ ' to screen ' + screen);  
				
  client.on('next', function() {
    app.screenfor(client).emit('next');
  });
});

// client device disconnected
app.clients.on('disconnect', function(client, data) {
  console.log('Client device disconnected with ID: ' + client.id);
});

// send messages to all screens and all clients
// TODO: message
// TODO: is this using the socket.io plain socket methods?
app.screens.send(message);
app.clients.send(message);