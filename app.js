var express = require('express');
var app = express()
var server = require('http').Server(app);

app.get('/',function(req,res) {
res.sendFile(__dirname + '/client/index.html');

});

app.use('/client',express.static(__dirname + '/client'));

server.listen(2000);

var io = require('socket.io')(server,{});
console.log('listening');
io.sockets.on('connection', function(socket) {
	console.log('socket connection');
});