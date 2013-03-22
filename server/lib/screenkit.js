/**
 * ScreenKit server module
 *
 * @author Richard Leggett - http://www.valisinteractive.com
 */
 
/**
 * Version.
 */
exports.version = '0.1.0';

// TODO: var app = require('./lib/screenkit.js').createServer(config)


var Screen = function() {
};

var Client = function() {
};

/**
 * Module
 */
var ScreenKit = module.exports = function (port, config) {
  if(port==null) {
    console.log('ScreenKit: No port specified.');
    return null;
  }
  this.config = config || {};

  var io = require('socket.io').listen(port);
    
  // TODO: consider how ScreenKit server can serve client web app directly
/*  var app = require('http').createServer(handler)
      , io = require('socket.io').listen(port) 
	  , fs = require('fs')

	  , url = require('url');
*/
	  
  
/*  function handler(req, res) {
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
	});*/
	
	console.log('ScreenKit running at http://TODO:'+port+'/');
}
  
/*
  this.colors = false !== opts.colors;
  this.level = 3;
  this.enabled = true;
*/
  
};

ScreenKit.prototype.screens = [];


ScreenKit.prototype.clients = [];


/**
 * XYZ method.
 *
 * @api public
 */

ScreenKit.prototype.onConnect = function () {
}